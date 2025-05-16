'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { X } from 'lucide-react';
import { useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { Button } from '@cash-compass/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cash-compass/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cash-compass/ui/select';
import { Input } from '@cash-compass/ui/input';
import { Badge } from '@cash-compass/ui/badge';
import {
  FancyMultiSelect,
  MultiSelectOption,
} from '@cash-compass/ui/multi-select';

const revenueDetailsFormSchema = z.object({
  paymentMethod: z.string().min(1, {
    message: 'Please select a payment method.',
  }),
  status: z.string().min(1, {
    message: 'Please select a status.',
  }),
  referenceNumber: z
    .string()
    .max(50, 'Reference number must be 50 characters or less')
    .optional(),
  tags: z.array(z.string()).max(5, 'Maximum 5 tags allowed').optional(),
});

type FormSchema = z.infer<typeof revenueDetailsFormSchema>;

type Props = {
  onValid: (data: any, isValid: boolean) => void;
  triggerSubmit: boolean;
  initialData?: Partial<FormSchema>;
};

export default function RevenueDetailsForm({
  onValid,
  triggerSubmit,
  initialData,
}: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(revenueDetailsFormSchema),
    defaultValues: initialData || {
      tags: [],
    },
  });

  const tagOptions: MultiSelectOption[] = [
    { value: 'recurring', label: 'Recurring' },
    { value: 'one-time', label: 'One-time' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'contract', label: 'Contract' },
    { value: 'retainer', label: 'Retainer' },
  ];

  // Handle form validation and submission
  const validateForm = useCallback(async () => {
    const isValid = await form.trigger();
    const formValues = form.getValues();
    onValid(formValues, isValid); // This is crucial
    return isValid;
  }, [form, onValid]);

  // Handle manual validation trigger from parent
  useEffect(() => {
    if (triggerSubmit) {
      validateForm();
    }
  }, [triggerSubmit, validateForm]);

  // Real-time validation with debounce
  useEffect(() => {
    const subscription = form.watch(
      debounce(() => {
        validateForm();
      }, 300)
    );
    return () => subscription.unsubscribe();
  }, [form.watch, validateForm]);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Payment Method</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  validateForm();
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="credit">Credit Card</SelectItem>
                  <SelectItem value="bank">Bank Transfer</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Status</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  validateForm();
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="received">
                    Received (Payment Complete)
                  </SelectItem>
                  <SelectItem value="expected">Expected</SelectItem>
                  <SelectItem value="invoiced">Invoiced</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select "Received" for immediate payment, "Expected" for future
                payments, or "Invoiced" to create an invoice.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referenceNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Reference Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter reference number"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    validateForm();
                  }}
                />
              </FormControl>
              <FormDescription>
                e.g., PO number, contract ID, etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Tags</FormLabel>
              <FormControl>
                <FancyMultiSelect
                  options={tagOptions}
                  value={field.value?.map(
                    (value) =>
                      tagOptions.find((option) => option.value === value) || {
                        value,
                        label: value,
                      }
                  )}
                  onChange={(selected) => {
                    const values = selected.map((item) => item.value);
                    field.onChange(values);
                    validateForm();
                  }}
                  placeholder="Select or create tags..."
                  renderBadge={(option, onRemove) => (
                    <Badge variant="secondary">
                      {option.label}
                      <button
                        className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        onClick={(e) => {
                          e.preventDefault();
                          onRemove();
                          validateForm();
                        }}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                      </button>
                    </Badge>
                  )}
                />
              </FormControl>
              <FormDescription>
                Select or create tags to categorize this revenue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
