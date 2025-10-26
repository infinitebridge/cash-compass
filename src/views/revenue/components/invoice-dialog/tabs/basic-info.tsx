import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
} from '@cash-compass/ui';
import { BasicInfoFormSchema } from '../schemas';
import { useRevenueDialogContext } from '../dialog-context';
import { useEffect } from 'react';
import { cn } from '@cash-compass/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

export const BasicInfoForm = () => {
  const { updateBasicTabValidation, fillBasicFormState, basicFormData } =
    useRevenueDialogContext();

  const form = useForm({
    resolver: zodResolver(BasicInfoFormSchema),
    defaultValues: basicFormData || {
      invoiceNumber: 'INV-2025-042',
      invoiceDate: new Date(),
      dueDate: new Date(),
      customer: '',
      referenceNumber: '',
      paymentTerms: 'Net 30',
    },
  });

  useEffect(() => {
    if (basicFormData) {
      form.reset(basicFormData);
    }
  }, []);

  useEffect(() => {
    const subscription = form.watch((values, { name, type }) => {
      fillBasicFormState(values);

      const isValid = form.formState.isValid;
      updateBasicTabValidation(isValid);
    });

    fillBasicFormState(form.getValues());
    updateBasicTabValidation(form.formState.isValid);

    return () => subscription.unsubscribe();
  }, [form.formState.isValid]);

  return (
    <Form {...form}>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="invoiceNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invoice Number *</FormLabel>
                <FormControl>
                  <>
                    <Input placeholder="INV-2025-042" {...field} />
                    <span className="text-xs text-gray-600">
                      Auto-generated, but you can customize it
                    </span>
                  </>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="invoiceDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invoice Date *</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
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
                      onSelect={field.onChange}
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
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date *</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
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
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
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
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment terms" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Net 30">Net 30</SelectItem>
                    <SelectItem value="Net 15">Net 15</SelectItem>
                    <SelectItem value="Due on Receipt">
                      Due on Receipt
                    </SelectItem>
                  </SelectContent>
                </Select>
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
              <FormLabel>Customer *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a customer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="acme-corp">Acme Corporation</SelectItem>
                  <SelectItem value="tech-solutions">
                    Tech Solutions Inc.
                  </SelectItem>
                  <SelectItem value="global-services">
                    Global Services LLC
                  </SelectItem>
                  <SelectItem value="startup-ventures">
                    Startup Ventures
                  </SelectItem>
                  <SelectItem value="enterprise-co">Enterprise Co.</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="referenceNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference Number</FormLabel>
              <FormControl>
                <Input placeholder="PO number, contract ID, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Next: Line Items</Button>
      </form>
    </Form>
  );
};
