'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, ChevronLeft } from 'lucide-react';

import { Button } from '@cash-compass/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
import { cn } from '@cash-compass/utils/lib/utils';

const formSchema = z.object({
  createInvoice: z.boolean().default(true),
  invoiceNumber: z.string().min(1, {
    message: 'Invoice number is required.',
  }),
  dueDate: z.date({
    required_error: 'Due date is required.',
  }),
  paymentTerms: z.string().min(1, {
    message: 'Payment terms are required.',
  }),
  notes: z.string().optional(),
  sendImmediately: z.boolean().default(false),
});

export default function InvoiceForm() {
  const [date, setDate] = useState<Date>(new Date(2025, 3, 20));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      createInvoice: true,
      invoiceNumber: 'INV-2025-042',
      dueDate: new Date(2025, 3, 20),
      paymentTerms: 'net30',
      notes: '',
      sendImmediately: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="createInvoice"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center mb-1">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel className="text-lg font-medium text-blue-700">
                            Create an invoice for this revenue
                          </FormLabel>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                          Recommended
                        </Badge>
                      </div>
                      <FormDescription className="text-blue-700">
                        Creating an invoice allows you to track payment status,
                        send reminders, and maintain professional records.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="invoiceNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Invoice Number
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription className="text-gray-500">
                    Auto-generated, but you can customize it
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Due Date
                  </FormLabel>
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
                          {field.value ? (
                            format(field.value, 'dd/MM/yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => {
                          if (date) {
                            field.onChange(date);
                            setDate(date);
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentTerms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Payment Terms
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
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
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-medium">
                    Notes to Customer
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Notes visible to customer on invoice"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
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
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Send invoice immediately</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <div className="pt-4 border-t">
            <Button
              variant="ghost"
              type="button"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Details
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
