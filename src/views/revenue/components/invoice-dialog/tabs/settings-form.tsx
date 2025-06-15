import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Switch,
  Checkbox,
  Textarea,
} from '@cash-compass/ui';
import { settingsFormSchema } from '../schemas';
import { useRevenueDialogContext } from '../dialog-context';
import { useEffect } from 'react';

export const SettingsForm = () => {
  const { updateInvoiceTabValidation, fillSettingsFormState } =
    useRevenueDialogContext();

  const form = useForm({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      customerNotes: '',
      internalNotes: '',
      applyTax: false,
      sendImmediately: false,
    },
  });

  const isValid = form.formState.isValid;

  useEffect(() => {
    const values = form.watch();
    updateInvoiceTabValidation(form.formState.isValid);
    if (isValid) {
      fillSettingsFormState(values);
      return;
    }
    fillSettingsFormState(undefined);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.formState.isValid]);

  return (
    <Form {...form}>
      <form className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Notes to Customer</h3>
          <FormField
            control={form.control}
            name="customerNotes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Notes visible to customer on invoice"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Internal Notes</h3>
          <FormField
            control={form.control}
            name="internalNotes"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Notes visible only to you"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Tax Settings</h3>
          <FormField
            control={form.control}
            name="applyTax"
            render={({ field }) => (
              <FormItem className="flex flex-row gap-3 items-center">
                <FormControl className="mt-3">
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <FormLabel>Apply Tax</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sendImmediately"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-3">
                <FormControl className="mt-2">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div>
                  <FormLabel>Send invoice immediately</FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};
