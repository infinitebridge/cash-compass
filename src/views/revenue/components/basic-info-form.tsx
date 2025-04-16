'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { format } from 'date-fns';
import { CalendarIcon, ChevronDown, ChevronRight, Plus } from 'lucide-react';

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

const formSchema = z.object({
  revenueDate: z.date({
    required_error: 'Revenue date is required',
  }),
  amount: z.string().min(1, 'Amount is required'),
  customer: z.string({
    required_error: 'Customer is required',
  }),
  category: z.string({
    required_error: 'Category is required',
  }),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

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

export function RevenueForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      revenueDate: new Date(),
      amount: '',
      description: '',
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    console.log(data);
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or redirect
    }, 1000);
  }

  function formatCurrency(value: string) {
    // Remove all non-numeric characters
    const numericValue = value.replace(/[^0-9.]/g, '');

    // Format as currency
    if (numericValue) {
      const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(Number.parseFloat(numericValue));
      return formatted;
    }

    return '0.00';
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Revenue Date Field */}
          <FormField
            control={form.control}
            name="revenueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-base font-medium">
                  Revenue Date <span className="text-blue-600">*</span>
                </FormLabel>
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
              <FormItem>
                <FormLabel className="text-base font-medium">
                  Amount <span className="text-blue-600">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <Input
                      placeholder="0.00"
                      className="pl-8 border-gray-300"
                      {...field}
                      onChange={(e) => {
                        const formatted = formatCurrency(e.target.value);
                        form.setValue('amount', formatted);
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
              <FormLabel className="text-base font-medium">
                Customer <span className="text-blue-600">*</span>
              </FormLabel>
              <div className="flex gap-2">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="border-blue-600 w-full">
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
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="border-gray-300"
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category/Source Field */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-medium">
                Category/Source <span className="text-blue-600">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormLabel className="text-base font-medium">
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter revenue details"
                  className="min-h-[120px] border-gray-300 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Navigation and Action Buttons */}
      </form>
    </Form>
  );
}
