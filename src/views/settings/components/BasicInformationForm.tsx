import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  Input,
  Label,
} from '@finbridge-manager-apps/ui';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import CountryDropdown from '../../../components/countries';
import { PhoneInput } from '../../../components/phone-input';
import { Select } from '../../../components/select';
import {
  GetBusinessByPkQuery,
  useUpdateBusinessByPkMutation,
  useUpdateCompanyByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useDropdownStore } from '../../../hooks/use-dropdown-store';
import { lowerCase } from '../../../lib/utils';

type Props = {
  business: GetBusinessByPkQuery;
};

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  country: z.string(),
  industry: z.string(),
  date_format: z.string(),
  address: z.string(),
});

// const dateFormats = [
//   { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD (ISO 8601)' },
//   { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY (US)' },
//   { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY (European)' },
//   { value: 'YYYY/MM/DD', label: 'YYYY/MM/DD (Asian)' },
//   { value: 'DD Mon YYYY', label: 'DD Mon YYYY (Abbreviated)' },
//   { value: 'MM/DD/YYYY HH:mm:ss', label: 'MM/DD/YYYY HH:mm:ss (US with Time)' },
//   { value: 'DD/MM/YYYY HH:mm', label: 'DD/MM/YYYY HH:mm (European with Time)' },
//   { value: 'hh:mm:ss', label: 'hh:mm:ss (Time only)' },
//   { value: 'hh:mm AM/PM', label: 'hh:mm AM/PM (12-hour format)' },
//   { value: 'Unix Timestamp', label: 'Unix Timestamp' },
// ];

const BasicInformationForm = ({ business }: Props) => {
  // Initialize useForm hook
  const { setCountryValue } = useDropdownStore();
  const { businessId } = useBusinessStore();
  const [updateBusiness] = useUpdateBusinessByPkMutation();
  const [updateCompany] = useUpdateCompanyByPkMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: '',
      phone: '',
      country: '',
      industry: '',
    },
  });

  // Form submit handler
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast.loading('Saving changes...', { id: 'changes' });

    updateBusiness({
      variables: {
        pkColumns: {
          id: Number(businessId),
        },
        set: {
          name: values.name,
          country: values.country,
        },
      },
      onCompleted: ({ update_business_by_pk }) => {
        updateCompany({
          variables: {
            pkColumns: {
              id: Number(update_business_by_pk?.companies[0].id),
            },
            set: {
              business_phone: values.phone,
            },
          },
          onCompleted: () => {
            toast.dismiss('changes');
            toast.success('Changes Saved successfully');
          },
          onError: (err) => {
            toast.dismiss('changes');
            toast.error(err.message);
          },
        });
      },
      onError: (err) => {
        toast.dismiss('changes');
        toast.error(err.message);
      },
    });
  };

  function getSelectedCountry(countryId: string) {
    form.setValue('country', countryId);
  }

  useEffect(() => {
    if (business) {
      setCountryValue(
        lowerCase(business?.business_by_pk?.companies[0].country ?? '')
      );
      form.reset({
        name: business?.business_by_pk?.name || '',
        phone: business?.business_by_pk?.companies?.[0]?.business_phone || '',
        industry: '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [business, form]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="form-item">
          <Label className="text-xs text-gray-500">Business Name</Label>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="business name"
                    className="border-lg"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">Business Phone</Label>
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">Business Country</Label>
          <FormField
            name="country"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CountryDropdown {...field} getValue={getSelectedCountry} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">Business Address</Label>
          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="address..." />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="form-item">
          <Label className="text-xs text-gray-500">Business Industry</Label>
          <FormField
            name="industry"
            control={form.control}
            render={({ field }) => (
              <FormItem>
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
        </div>

        {/* <div className="form-item">
          <Label className="text-xs text-gray-500">Preferred Date Format</Label>
          <FormField
            name="date_format"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select {...field} options={dateFormats} />
                </FormControl>
              </FormItem>
            )}
          />
        </div> */}

        <div className="flex items-center justify-start">
          <Button type="submit" className="rounded-lg">
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BasicInformationForm;
