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
import { useFormValidation } from '../../../context/form-validation-context';

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
  triggerSubmit?: boolean;
  isNavigating?: boolean;
};

export default function RevenueDetailsForm({
  triggerSubmit,
  isNavigating,
}: Props) {
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
    resolver: zodResolver(revenueDetailsFormSchema),
    defaultValues: {
      paymentMethod: formData.details?.paymentMethod || '',
      status: formData.details?.status || '',
      referenceNumber: formData.details?.referenceNumber || '',
      tags: formData.details?.tags || [],
    },
  });

  const tagOptions: MultiSelectOption[] = [
    { value: 'recurring', label: 'Recurring' },
    { value: 'one-time', label: 'One-time' },
    { value: 'subscription', label: 'Subscription' },
    { value: 'contract', label: 'Contract' },
    { value: 'retainer', label: 'Retainer' },
  ];

  // Enhanced validation function that integrates with context
  const validateForm = useCallback(async () => {
    try {
      // Trigger react-hook-form validation
      const isValid = await form.trigger();
      const formValues = form.getValues();

      // Update context with current form data
      updateFormData('details', formValues);

      // Update validation status in context
      updateFormValidation('details', isValid);

      // Handle field-level errors for better UX
      if (!isValid) {
        const errors = form.formState.errors;
        Object.keys(errors).forEach((fieldName) => {
          const error = errors[fieldName as keyof FormSchema];
          if (error?.message) {
            setFieldError('details', fieldName, error.message);
          }
        });
      } else {
        // Clear all errors if form is valid
        Object.keys(form.getValues()).forEach((fieldName) => {
          clearFieldError('details', fieldName);
        });
      }

      console.log('Details form validation:', { isValid, formValues });
      return isValid;
    } catch (error) {
      console.error('Details validation error:', error);
      updateFormValidation('details', false);
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
      console.log('Details: Validation triggered', {
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
      updateFormData('details', formValues);

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
    setFieldTouched('details', fieldName, true);
  };

  // Sync form with context data when it changes externally
  useEffect(() => {
    const contextData = formData.details;
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
  }, [formData.details, form]);

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
                  handleFieldTouch('paymentMethod');
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger
                    onFocus={() => handleFieldTouch('paymentMethod')}
                  >
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
                  handleFieldTouch('status');
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger onFocus={() => handleFieldTouch('status')}>
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
                  onFocus={() => handleFieldTouch('referenceNumber')}
                  onChange={(e) => {
                    field.onChange(e);
                    handleFieldTouch('referenceNumber');
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
                    handleFieldTouch('tags');
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
                          handleFieldTouch('tags');
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
