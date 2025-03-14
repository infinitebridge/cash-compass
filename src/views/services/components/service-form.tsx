import { zodResolver } from '@hookform/resolvers/zod';
import { InfoIcon, Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@finbridge-manager-apps/ui';
import { useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import {
  useGetCategoryTransactionQuery,
  useInsertServiceMutation,
  useUpdateServiceByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useGetServices } from '../hooks/use-get-services';
import { useNewService } from '../hooks/use-new-service';
import { Select } from './select';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  rate: z.preprocess(
    (value) => Number(value),
    z
      .number()
      .positive('Rate must be a positive number')
      .min(1, 'Rate is required')
  ),
  billable: z.boolean().default(false),
  auto_add: z.boolean().default(false),
  description: z.string().nullable().optional(),
  income_category_id: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  disabled?: boolean;
  onCreateAccount: (name: string) => void;
  onCreateCategory: (name: string) => void;
  onClose: () => void;
};

export const ServiceForm = ({
  id,
  defaultValues,
  disabled,
  onCreateAccount,
  onCreateCategory,
  onClose,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { isValid } = form.formState;
  const { reloadServices } = useGetServices();
  const [createService] = useInsertServiceMutation();
  const [updateService] = useUpdateServiceByPkMutation();
  const { selectedService } = useNewService();
  const { businessId } = useBusinessStore();

  const { data: incomeCategories } = useGetCategoryTransactionQuery({
    variables: {
      where: {
        type: {
          _eq: 'INCOME',
        },
      },
    },
  });

  const handleSubmit = (values: FormValues) => {
    if (selectedService?.id) {
      toast.loading('Service editing...', { id: 'service-edit' });

      updateService({
        variables: {
          pkColumns: {
            id: selectedService?.id,
          },
          set: {
            name: values.name,
            rate: values.rate,
            description: values.description,
            auto_add: values.auto_add,
            billable: values.billable,
            income_category_id: Number(values.income_category_id),
          },
        },
        onCompleted: () => {
          toast.dismiss('service-edit');
          toast.success('Service Information updated');
          onClose();
          reloadServices();
        },
        onError: (err) => {
          toast.dismiss('service-edit');
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('Service creation...', { id: 'service-creation' });

      createService({
        variables: {
          object: {
            name: values.name,
            rate: values.rate,
            description: values.description,
            auto_add: values.auto_add,
            billable: values.billable,
            income_category_id: Number(values.income_category_id),
            business_id: Number(businessId),
          },
        },
        onCompleted: () => {
          toast.dismiss('service-creation');
          toast.success('Service Created');
          onClose();
          reloadServices();
        },
        onError: (err) => {
          toast.dismiss('service-creation');
          toast.error(err.message);
        },
      });
    }
  };

  const handleDelete = () => {
    toast.success('Deleting Transaction...');
    // handle deletion logic
  };

  const categoriesOptions = useMemo(() => {
    return incomeCategories?.category_transaction.map((category) => {
      return {
        value: category.id.toString(),
        label: category.name ?? '',
      };
    });
  }, [incomeCategories?.category_transaction]);

  useEffect(() => {
    if (selectedService) {
      form.reset({
        name: selectedService?.name,
        rate: selectedService?.rate,
        description: selectedService?.description,
        auto_add: selectedService?.auto,
        billable: selectedService?.billable,
        income_category_id: selectedService?.income_category_id.toString(),
      });
    }
  }, [form, selectedService]);

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
                <Input
                  {...field}
                  placeholder="Enter the service name"
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="rate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  placeholder="Enter the rate"
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="income_category_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Income Category</FormLabel>
              <FormControl>
                <Select
                  placeholder="Select an income category"
                  options={categoriesOptions}
                  onCreate={onCreateAccount}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Optional description"
                  disabled={disabled}
                  value={field.value ?? ''}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="billable"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="billable"
                          {...field}
                          checked={field.value ?? false}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                        <label
                          htmlFor="billable"
                          className="text-sm font-normal leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Billable?
                        </label>
                        <InfoIcon className="h-4 w-4 text-gray-500" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="w-64">
                      <p className="w-full text-xs text-gray-500">
                        Billable hours are included on invoices and are
                        associated with project work. Non-billable time is
                        usually spent on internal meetings, calls, emails, etc
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="auto_add"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="auto_add"
                    {...field}
                    checked={field.value ?? false}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                  <label
                    htmlFor="auto_add"
                    className="text-sm font-normal leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Automatically add this service to all new projects
                  </label>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={!isValid}>
          {selectedService?.id ? 'Save changes' : 'Create Service'}
        </Button>
        {!!selectedService?.id && (
          <Button
            type="button"
            onClick={handleDelete}
            className="mt-2 w-full"
            variant="outline"
            disabled={disabled}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete service
          </Button>
        )}
      </form>
    </Form>
  );
};
