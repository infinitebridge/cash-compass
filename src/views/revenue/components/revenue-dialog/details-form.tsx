'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { X } from 'lucide-react';

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
import useDialogStore from './dialog-store';
import { useRevenueDialogContext } from './dialog-context';
import { useEffect, useRef } from 'react';

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

// Move tag options outside component to avoid recreation on each render
const tagOptions: MultiSelectOption[] = [
  { value: 'recurring', label: 'Recurring' },
  { value: 'one-time', label: 'One-time' },
  { value: 'subscription', label: 'Subscription' },
  { value: 'contract', label: 'Contract' },
  { value: 'retainer', label: 'Retainer' },
];

export default function RevenueDetailsForm() {
  const { updateDetailsTabValidation, detailsFormData, fillDetailsFormState } =
    useRevenueDialogContext();

  const form = useForm<FormSchema>({
    resolver: zodResolver(revenueDetailsFormSchema),
    mode: 'onChange',
    defaultValues: {
      paymentMethod: '',
      status: '',
      referenceNumber: '',
      tags: [],
    },
  });

  const values = form.watch();

  useEffect(() => {
    console.log(form.formState.isValid);
    updateDetailsTabValidation(form.formState.isValid);
  }, [form.formState.isValid, updateDetailsTabValidation]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fillDetailsFormState(values);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [values, fillDetailsFormState]);

  useEffect(() => {
    if (detailsFormData) {
      form.reset(detailsFormData);
    }
  }, [detailsFormData]);

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
                }}
                value={field.value || ''}
                key={`paymentMethod-${field.value || 'empty'}`}
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
                }}
                value={field.value || ''}
                key={`status-${field.value || 'empty'}`}
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
                <Input placeholder="Enter reference number" {...field} />
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
