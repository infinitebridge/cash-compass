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
  onValid: (data: any, isValid: boolean) => void;
  triggerSubmit: boolean;
  initialData?: Partial<FormSchema>;
};

export default function InvoiceForm({
  onValid,
  triggerSubmit,
  initialData,
}: Props) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: initialData || {
      createInvoice: true,
      sendImmediately: false,
    },
  });

  const createInvoice = form.watch('createInvoice');

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
          name="createInvoice"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 bg-card px-4 py-3 rounded-lg border w-full">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => {
                    field.onChange(checked);
                    validateForm();
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
                      onChange={(e) => {
                        field.onChange(e);
                        validateForm();
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
                            validateForm();
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
                      validateForm();
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
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
                        validateForm();
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
