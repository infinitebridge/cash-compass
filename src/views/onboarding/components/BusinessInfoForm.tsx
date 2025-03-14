import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@finbridge-manager-apps/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Select } from '../../services/components/select';

import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useCreateCustomUserBusinessMutation } from '../../../graphql';

const formSchema = z.object({
  name: z.string(),
  industry: z.string(),
  description: z.string(),
  billing_method: z.string(),
});

type FormValues = z.input<typeof formSchema>;

export const BusinessInfoForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { isValid, isSubmitting } = form.formState;
  const [createCompany] = useCreateCustomUserBusinessMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    toast.loading('Creating business...', { id: 'new-business' });
    createCompany({
      variables: {
        name: data.name,
        businessDescription: data.description,
        industryType: data.industry,
        currentBillingMethod: data.billing_method,
      },
      onCompleted: () => {
        toast.dismiss('new-business');
        toast.success('Business Created');
        navigate('/', { replace: true });
      },
      onError: (err) => {
        toast.dismiss('new-business');
        toast.error(err.message);
      },
    });
  };

  return (
    <Form {...form}>
      <form
        className="max-w-[700px] space-y-4 pt-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="text-2xl font-semibold">
          <h2>Tell us about your business</h2>
          <h2>So we can tailor your experience</h2>
        </div>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="industry"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>What does your business do ?</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  options={[
                    {
                      value: 'CONSTRUCTION_TRADES_AND_HOME_SERVICES',
                      label: 'Construction, Trades and Home Services',
                    },
                    {
                      value: 'CREATIVE_PROFESSIONALS',
                      label: 'Creative Professionals',
                    },
                    {
                      value: 'MARKETING_COMMUNICATIONS_MEDIA',
                      label: 'Marketing, Communications & Media',
                    },
                    {
                      value: 'DEVELOPMENT_PROGRAMMING',
                      label: 'Development & Programming',
                    },
                    {
                      value: 'MANAGEMENT_CONSULTING',
                      label: 'Management Consulting',
                    },
                    {
                      value: 'INFORMATION_TECHNOLOGY_AND_SUPPORT',
                      label: 'Information Technology and Support',
                    },
                    {
                      value: 'ACCOUNTING_AND_FINANCE',
                      label: 'Accounting and Finance',
                    },
                    {
                      value: 'AUTOMOTIVE_AND_TRANSPORT',
                      label: 'Automotive and Transport',
                    },
                    {
                      value: 'HEALTH_AND_WELLNESS',
                      label: 'Health and Wellness',
                    },
                    { value: 'FOOD_SERVICES', label: 'Food Services' },
                    { value: 'ADMINISTRATION', label: 'Administration' },
                    { value: 'AGRICULTURE', label: 'Agriculture' },
                    { value: 'ARCHITECTURE', label: 'Architecture' },
                    {
                      value: 'ARTS_AND_ENTERTAINMENT',
                      label: 'Arts and Entertainment',
                    },
                    { value: 'EDUCATION', label: 'Education' },
                    { value: 'ENGINEERING', label: 'Engineering' },
                    { value: 'ENVIRONMENT', label: 'Environment' },
                    { value: 'EVENT_PLANNING', label: 'Event Planning' },
                    {
                      value: 'FASHION_AND_BEAUTY',
                      label: 'Fashion and Beauty',
                    },
                    {
                      value: 'HOSPITALITY_TRAVEL_AND_TOURISM',
                      label: 'Hospitality, Travel and Tourism',
                    },
                    {
                      value: 'HUMAN_RESOURCES_AND_STAFFING',
                      label: 'Human Resources and Staffing',
                    },
                    { value: 'LEGAL', label: 'Legal' },
                    {
                      value: 'NON_PROFIT_AND_VOLUNTEER_MANAGEMENT',
                      label: 'Non-Profit and Volunteer Management',
                    },
                    { value: 'PRINT_MANAGEMENT', label: 'Print Management' },
                    {
                      value: 'PROJECT_MANAGEMENT',
                      label: 'Project Management',
                    },
                    {
                      value: 'REAL_ESTATE_AND_PROPERTY_MANAGEMENT',
                      label: 'Real Estate and Property Management',
                    },
                    { value: 'RETAIL', label: 'Retail' },
                    {
                      value: 'SALES_AND_BUSINESS_DEVELOPMENT',
                      label: 'Sales and Business Development',
                    },
                    {
                      value: 'TELECOMMUNICATIONS',
                      label: 'Telecommunications',
                    },
                    { value: 'WEB_HOSTING', label: 'Web Hosting' },
                    { value: 'OTHER', label: 'Other' },
                  ]}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>How would your descripe your bussines ?</FormLabel>
              <FormControl>
                <Select
                  {...field}
                  options={[
                    {
                      value: 'ITS_LAUNCHING_SOON',
                      label: 'It’s launching soon',
                    },
                    {
                      value: 'ITS_PART_TIME_OR_SUPPLEMENTS_MY_MAIN_INCOME',
                      label: 'It’s part-time or supplements my main income',
                    },
                    {
                      value: 'ITS_A_NEW_BUSINESS_BUT_ITS_MY_FULL_TIME_FOCUS',
                      label: 'It’s a new business but it’s my full-time focus',
                    },
                    {
                      value: 'ITS_BEEN_MY_FULL_TIME_FOCUS_FOR_OVER_A_YEAR',
                      label: 'It’s been my full-time focus for over a year',
                    },
                  ]}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="billing_method"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What do you currently use to bill your customers ?
              </FormLabel>
              <FormControl>
                <Select
                  {...field}
                  options={[
                    { value: 'PEN_AND_PAPER', label: 'Pen and paper' },
                    {
                      value: 'SPREADSHEETS_AND_WORD_DOCUMENTS',
                      label: 'Spreadsheets and Word documents',
                    },
                    {
                      value: 'I_DONT_USE_ANYTHING_RIGHT_NOW',
                      label: "I don't use anything right now",
                    },
                    {
                      value: 'ANOTHER_ACCOUNTING_SOFTWARE',
                      label: 'Another accounting software',
                    },
                  ]}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex flex-row items-center justify-end gap-3">
          <Button disabled={!isValid || isSubmitting}>Save and Finish</Button>
        </div>
      </form>
    </Form>
  );
};
