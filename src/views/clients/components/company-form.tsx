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
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import CountryDropdown from '../../../components/countries';
import { PhoneInput } from '../../../components/phone-input/index';
import {
  useGetCompanyByPkQuery,
  useInsertCompanyMutation,
  useUpdateCompanyByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useDropdownStore } from '../../../hooks/use-dropdown-store';
import { lowerCase } from '../../../lib/utils';
import { useGetCompanies } from '../hooks/use-get-companies';
import { useNewCompany } from '../hooks/use-new-conpany';

const formSchema = z.object({
  name: z.string(),
  country: z.string(),
  phone: z.string(),
  address: z.string(),
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  onClose: () => void;
  companyName?: string;
};

export const CompanyForm = ({ onClose, companyName }: Props) => {
  const { id } = useNewCompany();
  const { setCountryValue } = useDropdownStore();
  const { businessId } = useBusinessStore();
  const { data, loading } = useGetCompanyByPkQuery({
    variables: {
      companyByPkId: Number(id),
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: companyName ?? '',
      country: '',
      phone: '',
      address: '',
    },
  });

  const { refetch } = useGetCompanies();
  const [insertCompany] = useInsertCompanyMutation();
  const [updateCompany] = useUpdateCompanyByPkMutation();

  const getCountryValue = (value: string) => {
    form.setValue('country', value);
  };

  const handleSubmit = (values: FormValues) => {
    if (id) {
      toast.loading('Editing company info', { id: 'company-edit' });
      updateCompany({
        variables: {
          pkColumns: {
            id,
          },
          set: {
            name: values.name,
            country: values.country,
            business_phone: values.phone,
            address: values.address,
          },
        },
        onCompleted: () => {
          toast.dismiss('company-edit');
          toast.success('Company info updated successfully!');
          onClose();
          refetch();
        },
      });
    } else {
      toast.loading('Adding company', { id: 'company-creation' });
      insertCompany({
        variables: {
          object: {
            name: values.name,
            country: values.country,
            business_phone: values.phone,
            address: values.address,
            business_id: Number(businessId),
          },
        },
        onCompleted: () => {
          toast.dismiss('company-creation');
          toast.success('Company added successfully!');
          onClose();
          refetch();
        },
      });
    }
  };

  useEffect(() => {
    if (data && data.company_by_pk) {
      setCountryValue(lowerCase(data.company_by_pk.country ?? ''));
      form.reset({
        name: data.company_by_pk.name,
        country: data.company_by_pk.country ?? '',
        phone: data.company_by_pk.business_phone ?? '',
        address: data.company_by_pk.address ?? '',
      });
    }
  }, [data, form, setCountryValue]);

  if (loading) {
    return (
      <div className="flex h-[500px] w-full items-center justify-center">
        <Loader2 className="size-6 animate-spin text-slate-300" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Company name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="country"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <CountryDropdown {...field} getValue={getCountryValue} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <PhoneInput {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Company address" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full">{id ? 'Edit' : 'Add'}</Button>
      </form>
    </Form>
  );
};
