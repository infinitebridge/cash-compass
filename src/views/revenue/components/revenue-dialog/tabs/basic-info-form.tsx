import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

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
import { useRevenueDialogContext } from '../dialog-context';
import { useEffect } from 'react';
import { basicInfoFormSchema, BasicInfoFormSchemaType } from '../schemas';
import { formatCurrency } from '@cash-compass/utils';

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
  const { updateBasicTabValidation, basicFormData, fillBasicFormState } =
    useRevenueDialogContext();

  const form = useForm<BasicInfoFormSchemaType>({
    resolver: zodResolver(basicInfoFormSchema),
    mode: 'onChange',
    defaultValues: basicFormData || {
      revenueDate: new Date(),
      amount: '',
      customer: '',
      category: '',
      description: '',
    },
  });

  const isValid = form.formState.isValid;

  useEffect(() => {
    const values = form.watch();
    updateBasicTabValidation(form.formState.isValid);
    if (isValid) {
      fillBasicFormState({
        ...values,
        amount: formatCurrency(values.amount),
      });
      return;
    }
    fillBasicFormState(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.formState.isValid]);

  return (
    <Form {...form}>
      <form className="space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="revenueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-gray-600">Revenue Date *</FormLabel>
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
                      onSelect={(date) => {
                        field.onChange(date);
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
                        const value = e.target.value;
                        // Remove all non-numeric characters except decimal point
                        const numericValue = value.replace(/[^0-9.]/g, '');

                        // Prevent multiple decimal points
                        const parts = numericValue.split('.');
                        let cleanValue = parts[0];
                        if (parts.length > 1) {
                          // Only allow 2 decimal places
                          cleanValue += '.' + parts[1].slice(0, 2);
                        }

                        // Store the raw numeric value (no formatting during typing)
                        field.onChange(cleanValue);
                      }}
                      onBlur={(e) => {
                        const value = e.target.value;
                        // Format as currency when leaving the field
                        if (value && value !== '.') {
                          const formattedValue = formatCurrency(value);
                          field.onChange(formattedValue);
                        }
                      }}
                      onFocus={(e) => {
                        const value = e.target.value;
                        // Convert back to raw number when focusing
                        if (value) {
                          const numericValue = value.replace(/[^0-9.]/g, '');
                          field.onChange(numericValue);
                        }
                      }}
                      onKeyDown={(e) => {
                        // Allow: backspace, delete, tab, escape, enter
                        if (
                          [8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
                          // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                          (e.keyCode === 65 && e.ctrlKey === true) ||
                          (e.keyCode === 67 && e.ctrlKey === true) ||
                          (e.keyCode === 86 && e.ctrlKey === true) ||
                          (e.keyCode === 88 && e.ctrlKey === true) ||
                          // Allow: home, end, left, right
                          (e.keyCode >= 35 && e.keyCode <= 39)
                        ) {
                          return;
                        }
                        // Ensure that it is a number or decimal point and stop the keypress
                        if (
                          (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
                          (e.keyCode < 96 || e.keyCode > 105) &&
                          e.keyCode !== 190 &&
                          e.keyCode !== 110
                        ) {
                          e.preventDefault();
                        }
                        // Prevent multiple decimal points
                        const target = e.target as HTMLInputElement;
                        if (
                          (e.keyCode === 190 || e.keyCode === 110) &&
                          target.value.indexOf('.') !== -1
                        ) {
                          e.preventDefault();
                        }
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
                  }}
                  value={field.value || ''}
                  key={`customer-${field.value || 'empty'}`}
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

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-600">Category/Source</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                }}
                value={field.value || ''}
                key={`category-${field.value || 'empty'}`}
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
