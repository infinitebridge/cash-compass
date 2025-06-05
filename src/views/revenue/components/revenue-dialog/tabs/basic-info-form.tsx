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
                      {...field}
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
