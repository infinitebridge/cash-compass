'use client';

import { useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import debounce from 'lodash.debounce';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cash-compass/ui/form';
import { Input } from '@cash-compass/ui/input';
import { Textarea } from '@cash-compass/ui/textarea';
import { Checkbox } from '@cash-compass/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cash-compass/ui/select';
import { Calendar } from '@cash-compass/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@cash-compass/ui/popover';
import { Badge } from '@cash-compass/ui/badge';
import { Button } from '@cash-compass/ui/button';
import { cn } from '@cash-compass/utils/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormValidation } from '../../../context/form-validation-context';

const invoiceFormSchema = z
  .object({
    createInvoice: z.boolean().default(true),
    invoiceNumber: z
      .string()
      .min(1, { message: 'Invoice number is required.' }),
    dueDate: z.date({ required_error: 'Due date is required.' }),
    paymentTerms: z.string().min(1, { message: 'Payment terms are required.' }),
    notes: z
      .string()
      .max(1000, 'Notes must be 1000 characters or less')
      .optional(),
    sendImmediately: z.boolean().default(false),
  })
  .refine((data) => {
    // Only validate invoice fields if createInvoice is true
    if (!data.createInvoice) return true;
    return true; // All other fields are already validated by Zod
  });

export type FormSchema = z.infer<typeof invoiceFormSchema>;

type Props = {
  triggerSubmit?: boolean;
  isNavigating?: boolean;
};

export default function InvoiceForm({ triggerSubmit, isNavigating }: Props) {
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
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      createInvoice: formData.invoice?.createInvoice ?? true,
      invoiceNumber: formData.invoice?.invoiceNumber || '',
      dueDate: formData.invoice?.dueDate || undefined,
      paymentTerms: formData.invoice?.paymentTerms || '',
      notes: formData.invoice?.notes || '',
      sendImmediately: formData.invoice?.sendImmediately ?? false,
    },
  });

  const createInvoice = form.watch('createInvoice');

  // Enhanced validation function with conditional logic
  const validateForm = useCallback(async () => {
    try {
      const formValues = form.getValues();

      // Always update context with current form data
      updateFormData('invoice', formValues);

      // Conditional validation based on createInvoice checkbox
      let isValid = true;

      if (formValues.createInvoice) {
        // If createInvoice is checked, validate all required fields
        isValid = await form.trigger();

        // Handle field-level errors
        if (!isValid) {
          const errors = form.formState.errors;
          Object.keys(errors).forEach((fieldName) => {
            const error = errors[fieldName as keyof FormSchema];
            if (error?.message) {
              setFieldError('invoice', fieldName, error.message);
            }
          });
        } else {
          // Clear all errors if form is valid
          Object.keys(form.getValues()).forEach((fieldName) => {
            clearFieldError('invoice', fieldName);
          });
        }
      } else {
        // If createInvoice is unchecked, form is always valid
        // But we still need to clear any existing errors
        Object.keys(form.getValues()).forEach((fieldName) => {
          clearFieldError('invoice', fieldName);
        });
        isValid = true;
      }

      // Update validation status in context
      updateFormValidation('invoice', isValid);

      console.log('Invoice form validation:', {
        isValid,
        formValues,
        createInvoice: formValues.createInvoice,
      });

      return isValid;
    } catch (error) {
      console.error('Invoice validation error:', error);
      updateFormValidation('invoice', false);
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
      console.log('Invoice: Validation triggered', {
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
      updateFormData('invoice', formValues);

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
    setFieldTouched('invoice', fieldName, true);
  };

  // Sync form with context data when it changes externally
  useEffect(() => {
    const contextData = formData.invoice;
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
  }, [formData.invoice, form]);

  // Generate auto invoice number when createInvoice is first checked
  useEffect(() => {
    if (createInvoice && !form.getValues('invoiceNumber')) {
      const autoNumber = `INV-${Date.now().toString().slice(-6)}`;
      form.setValue('invoiceNumber', autoNumber);
      handleFieldTouch('invoiceNumber');
    }
  }, [createInvoice, form]);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="createInvoice"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 bg-card px-4 py-3 rounded-lg border w-full">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                    handleFieldTouch('createInvoice');
                  }}
                  className="mt-2.5"
                />
              </FormControl>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between items-center">
                  <FormLabel className="text-sm font-medium">
                    Create an invoice for this revenue
                  </FormLabel>
                  <Badge
                    variant="outline"
                    className="text-xs bg-gray-100 text-primary border-primary/20"
                  >
                    Recommended
                  </Badge>
                </div>
                <FormDescription className="text-xs text-muted-foreground">
                  Creating an invoice allows you to track payment status, send
                  reminders, and maintain professional records.
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        {createInvoice && (
          <>
            <FormField
              control={form.control}
              name="invoiceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onFocus={() => handleFieldTouch('invoiceNumber')}
                      onChange={(e) => {
                        field.onChange(e);
                        handleFieldTouch('invoiceNumber');
                      }}
                    />
                  </FormControl>
                  <FormDescription className="text-muted-foreground">
                    Auto-generated, but you can customize it
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                          onFocus={() => handleFieldTouch('dueDate')}
                        >
                          {field.value
                            ? format(field.value, 'dd/MM/yyyy')
                            : 'Pick a date'}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(selectedDate) => {
                          if (selectedDate) {
                            field.onChange(selectedDate);
                            handleFieldTouch('dueDate');
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentTerms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Terms</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      handleFieldTouch('paymentTerms');
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger
                        onFocus={() => handleFieldTouch('paymentTerms')}
                      >
                        <SelectValue placeholder="Select payment terms" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="net7">Net 7</SelectItem>
                      <SelectItem value="net14">Net 14</SelectItem>
                      <SelectItem value="net30">Net 30</SelectItem>
                      <SelectItem value="net60">Net 60</SelectItem>
                      <SelectItem value="due-receipt">
                        Due on Receipt
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes to Customer</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Notes visible to customer on invoice"
                      className="min-h-[100px]"
                      {...field}
                      onFocus={() => handleFieldTouch('notes')}
                      onChange={(e) => {
                        field.onChange(e);
                        handleFieldTouch('notes');
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sendImmediately"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(checked) => {
                        field.onChange(checked);
                        handleFieldTouch('sendImmediately');
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Send invoice immediately</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
      </form>
    </Form>
  );
}
