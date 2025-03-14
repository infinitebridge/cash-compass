import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Label,
} from '@finbridge-manager-apps/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Select } from '../../../components/select';
import TaxesList from './TaxesList';

const formSchema = z.object({
  currency: z.string().min(1, 'Select a currency'),
  month: z.string().min(1, 'Select a month'),
  day: z.string().min(1, 'Select a day'),
  hourlyRate: z
    .number()
    .min(0, { message: 'Hourly rate must be at least 0' })
    .max(1000, { message: 'Hourly rate cannot exceed 1000' }),
  rc: z.string().optional(),
  if: z.string().optional(),
  tp: z.string().optional(),
  cnss: z.string().optional(),
  ice: z.string().optional(),
});

const currencyOptions = [
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
  { value: 'GBP', label: 'GBP' },
  { value: 'JPY', label: 'JPY' },
  { value: 'AUD', label: 'AUD' },
  { value: 'CAD', label: 'CAD' },
];

const monthOptions = [
  { value: 'January', label: 'January' },
  { value: 'February', label: 'February' },
  { value: 'March', label: 'March' },
  { value: 'April', label: 'April' },
  { value: 'May', label: 'May' },
  { value: 'June', label: 'June' },
  { value: 'July', label: 'July' },
  { value: 'August', label: 'August' },
  { value: 'September', label: 'September' },
  { value: 'October', label: 'October' },
  { value: 'November', label: 'November' },
  { value: 'December', label: 'December' },
];

const dayOptions = Array.from({ length: 31 }, (_, i) => ({
  value: (i + 1).toString(),
  label: (i + 1).toString(),
}));

const FinancialForm = () => {
  // Initialize useForm hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currency: '',
      month: '',
      day: '',
      hourlyRate: 0,
    },
  });

  // Form submit handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // Perform further actions such as sending data to backend
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Currency Selection */}
        <div className="form-item">
          <Label className="text-xs text-gray-500">Currency</Label>
          <FormField
            name="currency"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    {...field}
                    options={currencyOptions}
                    placeholder="Select currency"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Month Selection */}
        <div className="form-item">
          <Label className="text-xs text-gray-500">Month</Label>
          <FormField
            name="month"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    {...field}
                    options={monthOptions}
                    placeholder="Select month"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Day Selection */}
        <div className="form-item">
          <Label className="text-xs text-gray-500">Day</Label>
          <FormField
            name="day"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    {...field}
                    options={dayOptions}
                    placeholder="Select day"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        {/* Hourly Rate */}
        <div className="form-item">
          <Label className="text-xs text-gray-500">Hourly Rate</Label>
          <FormField
            name="hourlyRate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="number" placeholder="Hourly rate" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">RC</Label>
          <FormField
            name="rc"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="rc" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">I.F</Label>
          <FormField
            name="if"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">T.P</Label>
          <FormField
            name="tp"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">CNSS</Label>
          <FormField
            name="cnss"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="CNSS..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">I.C.E</Label>
          <FormField
            name="ice"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-xs text-gray-500">Tax Items</Label>

          <TaxesList />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-start">
          <Button type="submit" className="rounded-lg">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default FinancialForm;
