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
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { PhoneInput } from '../../../components/phone-input/index';
import { Select } from '../../../components/select';
import {
  useGetPersonByPkQuery,
  useInsertPersonMutation,
  useUpdatePersonByPkMutation,
} from '../../../graphql';
import { useGetCompanies } from '../hooks/use-get-companies';
import { useGetPeople } from '../hooks/use-get-people';
import { useNewPerson } from '../hooks/use-new-person';
import NewCompanyModal from './new-company-modal';

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  phone: z.string(),
  company_id: z.string(),
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  onClose: () => void;
};

export const PersonForm = ({ onClose }: Props) => {
  const { id } = useNewPerson();
  const { data: person, loading } = useGetPersonByPkQuery({
    variables: {
      personByPkId: Number(id),
    },
  });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      company_id: '',
    },
  });
  const { companies, refetch: reloadCompanies } = useGetCompanies();
  const { refetch } = useGetPeople();
  const [insertPerson] = useInsertPersonMutation();
  const [editPerson] = useUpdatePersonByPkMutation();
  const [openCreationModal, setOpenCreationModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');

  const { isSubmitting, isValid } = form.formState;

  const handleSubmit = (values: FormValues) => {
    if (id) {
      toast.loading('editing person info', { id: 'person-edit' });
      editPerson({
        variables: {
          pkColumns: {
            id,
          },
          set: {
            first_name: values.first_name,
            last_name: values.last_name,
            phone: values.phone,
            whatsapp_phone: values.phone,
            email: values.email,
            company_id: Number(values.company_id),
          },
        },
        onCompleted: () => {
          toast.dismiss('person-edit');
          toast.success('Person info updated successfully !');
          onClose();
          refetch();
          reloadCompanies();
        },
        onError: (err) => {
          toast.dismiss('person-edit');
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('adding a person', { id: 'person-add' });
      insertPerson({
        variables: {
          object: {
            first_name: values.first_name,
            last_name: values.last_name,
            phone: values.phone,
            whatsapp_phone: values.phone,
            email: values.email,
            company_id: Number(values.company_id),
          },
        },
        onCompleted: () => {
          toast.dismiss('person-add');
          toast.success('Person added successfully !');
          onClose();
          refetch();
          reloadCompanies();
        },
        onError: (err) => {
          toast.dismiss('person-add');
          toast.error(err.message);
        },
      });
    }
  };

  useEffect(() => {
    form.reset({
      first_name: person?.person_by_pk?.first_name ?? '',
      last_name: person?.person_by_pk?.last_name ?? '',
      email: person?.person_by_pk?.email ?? '',
      phone: person?.person_by_pk?.phone ?? '',
      company_id: person?.person_by_pk?.company_id?.toString() ?? '',
    });
  }, [form, person]);

  const formattedCompanies = useMemo(() => {
    return companies?.map((m) => {
      return {
        value: m.id.toString(),
        label: m.name,
      };
    });
  }, [companies]);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-4 pt-4"
        >
          <FormField
            name="first_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="first name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="last_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="last name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="enter the email" {...field} />
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
            name="company_id"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Select
                    placeholder="Select a category"
                    options={formattedCompanies}
                    onCreate={(val) => {
                      setNewCompanyName(val);
                      setOpenCreationModal(true);
                    }}
                    value={field.value.toString()}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isSubmitting || !isValid}>
            {id ? 'Edit' : 'Add'}
          </Button>
        </form>
      </Form>
      <NewCompanyModal
        openCreationModal={openCreationModal}
        setOpenCreationModal={setOpenCreationModal}
        newCompany={newCompanyName}
      />
    </>
  );
};
