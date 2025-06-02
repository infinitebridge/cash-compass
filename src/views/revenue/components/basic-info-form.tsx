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
import { useFormValidation } from '../../../context/form-validation-context';

// Move these outside component to avoid recreation on each render
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

type FormSchema = z.infer<typeof basicInfoFormSchema>;

type RevenueFormProps = {
  triggerSubmit?: boolean;
  isNavigating?: boolean;
};

export function RevenueForm({ triggerSubmit, isNavigating }: RevenueFormProps) {
  const {
    formData,
    validationTrigger,
    updateFormData,
    updateFormValidation,
    setFieldTouched,
    setFieldError,
    clearFieldError,
  } = useFormValidation();

  // Initialize form with context data or defaults
  const form = useForm<FormSchema>({
    resolver: zodResolver(basicInfoFormSchema),
    defaultValues: {
      revenueDate: formData.basicInfo?.revenueDate || undefined,
      amount: formData.basicInfo?.amount || '0.00',
      customer: formData.basicInfo?.customer || '',
      category: formData.basicInfo?.category || '',
      description: formData.basicInfo?.description || '',
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

  // Enhanced validation function that integrates with context
  const validateForm = useCallback(async () => {
    try {
      // Trigger react-hook-form validation
      const isValid = await form.trigger();
      const formValues = form.getValues();

      // Update context with current form data
      updateFormData('basicInfo', formValues);

      // Update validation status in context
      updateFormValidation('basicInfo', isValid);

      // Handle field-level errors for better UX
      if (!isValid) {
        const errors = form.formState.errors;
        Object.keys(errors).forEach((fieldName) => {
          const error = errors[fieldName as keyof FormSchema];
          if (error?.message) {
            setFieldError('basicInfo', fieldName, error.message);
          }
        });
      } else {
        // Clear all errors if form is valid
        Object.keys(form.getValues()).forEach((fieldName) => {
          clearFieldError('basicInfo', fieldName);
        });
      }

      console.log('BasicInfo form validation:', { isValid, formValues });
      return isValid;
    } catch (error) {
      console.error('BasicInfo validation error:', error);
      updateFormValidation('basicInfo', false);
      return false;
    }
  }, [
    form,
    updateFormData,
    updateFormValidation,
    setFieldError,
    clearFieldError,
  ]);

  // Handle validation triggers from context
  useEffect(() => {
    if (triggerSubmit || validationTrigger) {
      console.log('BasicInfo: Validation triggered', {
        triggerSubmit,
        validationTrigger,
      });
      validateForm();
    }
  }, [triggerSubmit, validationTrigger, validateForm]);

  // Real-time validation with debounce - updates context immediately
  const debouncedValidation = useCallback(
    debounce(async () => {
      await validateForm();
    }, 300),
    [validateForm]
  );

  // Watch for form changes and update context
  useEffect(() => {
    const subscription = form.watch((formValues) => {
      // Always update context with current data
      updateFormData('basicInfo', formValues);

      // Trigger debounced validation
      debouncedValidation();
    });

    return () => {
      subscription.unsubscribe();
      debouncedValidation.cancel();
    };
  }, [form.watch, updateFormData, debouncedValidation]);

  // Handle field touch events
  const handleFieldTouch = (fieldName: string) => {
    setFieldTouched('basicInfo', fieldName, true);
  };

  // Sync form with context data when it changes externally
  useEffect(() => {
    const contextData = formData.basicInfo;
    if (contextData && Object.keys(contextData).length > 0) {
      // Only update if the data is different to avoid infinite loops
      const currentValues = form.getValues();
      const hasChanges = Object.keys(contextData).some(
        (key) => contextData[key] !== currentValues[key as keyof FormSchema]
      );

      if (hasChanges) {
        form.reset(contextData);
      }
    }
  }, [formData.basicInfo, form]);

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
                        onFocus={() => handleFieldTouch('revenueDate')}
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
                      onSelect={(date) => {
                        field.onChange(date);
                        handleFieldTouch('revenueDate');
                      }}
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
                      onFocus={() => handleFieldTouch('amount')}
                      onChange={(e) => {
                        const formatted = formatCurrency(e.target.value);
                        form.setValue('amount', formatted, {
                          shouldValidate: true,
                        });
                        handleFieldTouch('amount');
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
                    handleFieldTouch('customer');
                  }}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger
                      className="w-full"
                      onFocus={() => handleFieldTouch('customer')}
                    >
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
                  handleFieldTouch('category');
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger
                    className="border-gray-300"
                    onFocus={() => handleFieldTouch('category')}
                  >
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
                  onFocus={() => handleFieldTouch('description')}
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldTouch('description');
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
