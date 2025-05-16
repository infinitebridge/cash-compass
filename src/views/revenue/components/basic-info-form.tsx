'use client';

import { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import debounce from 'lodash.debounce';

import { Button } from '@cash-compass/ui/button';
import { Calendar } from '@cash-compass/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cash-compass/ui/form';
import { Input } from '@cash-compass/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@cash-compass/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cash-compass/ui/select';
import { Textarea } from '@cash-compass/ui/textarea';
import { cn } from '@cash-compass/utils/lib/utils';

const basicInfoFormSchema = z.object({
  revenueDate: z
    .date({
      required_error: 'Revenue date is required',
      invalid_type_error: 'Invalid date format',
    })
    .refine((date) => !isNaN(date.getTime()), {
      message: 'Invalid date selected',
    }),
  amount: z
    .string()
    .min(1, 'Amount is required')
    .refine((val) => !isNaN(Number(val.replace(/,/g, ''))), {
      message: 'Amount must be a valid number',
    }),
  customer: z
    .string()
    .min(1, 'Customer is required')
    .refine((val) => customers.some((c) => c.id === val), {
      message: 'Selected customer is not valid',
    }),
  category: z
    .string()
    .min(1, 'Category is required')
    .refine((val) => categories.some((c) => c.id === val), {
      message: 'Selected category is not valid',
    }),
  description: z
    .string()
    .max(500, 'Description must be 500 characters or less')
    .optional(),
});

// Sample data for dropdowns
const customers = [
  { id: '1', name: 'Acme Inc.' },
  { id: '2', name: 'Globex Corporation' },
  { id: '3', name: 'Stark Industries' },
];

const categories = [
  { id: '1', name: 'Sales' },
  { id: '2', name: 'Services' },
  { id: '3', name: 'Subscription' },
  { id: '4', name: 'Other' },
];

type FormSchema = z.infer<typeof basicInfoFormSchema>;

type RevenueFormProps = {
  onValid: (data: any, isValid: boolean) => void;
  triggerSubmit: boolean;
  initialData?: Partial<FormSchema>;
};

export function RevenueForm({
  onValid,
  triggerSubmit,
  initialData,
}: RevenueFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(basicInfoFormSchema),
    defaultValues: initialData || {
      amount: '0.00',
    },
  });

  // Format currency input
  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    if (numericValue) {
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number.parseFloat(numericValue));
    }
    return '0.00';
  };

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
      <form className="space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revenue Date Field */}
          <FormField
            control={form.control}
            name="revenueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-gray-600">Revenue Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          'pl-3 text-left font-normal border-gray-300',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'dd/MM/yyyy')
                        ) : (
                          <span>Select date</span>
                        )}
                        <CalendarIcon className="ml-auto h-5 w-5 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Amount Field */}
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem className="-mt-2.5">
                <FormLabel className="text-gray-600">Amount</FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-600">$</span>
                    </div>
                    <Input
                      placeholder="0.00"
                      className="pl-8 border-gray-300"
                      value={field.value}
                      onChange={(e) => {
                        const formatted = formatCurrency(e.target.value);
                        form.setValue('amount', formatted, {
                          shouldValidate: true,
                        });
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Customer Field */}
        <FormField
          control={form.control}
          name="customer"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Customer</FormLabel>
              <div className="flex gap-2">
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    validateForm();
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a customer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {customers.map((customer) => (
                      <SelectItem key={customer.id} value={customer.id}>
                        {customer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category Field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Category/Source</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  validateForm();
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description Field */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter revenue details"
                  className="min-h-[120px] border-gray-300 resize-none"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    validateForm();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
