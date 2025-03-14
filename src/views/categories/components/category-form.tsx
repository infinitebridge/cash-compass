import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@finbridge-manager-apps/ui';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import {
  useInsertCategoryMutation,
  useUpdateCategoryTransactionByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useGetCategories } from '../hooks/use-get-categories';
import { useOpenCategory } from '../hooks/use-open-category';
const formSchema = z.object({
  name: z.string(),
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onDelete?: () => void;
  disabled?: boolean;
  closeSheet: () => void;
};

export const CategoryForm = ({ id, onDelete, disabled, closeSheet }: Props) => {
  const { refetch } = useGetCategories();
  const { selectedCategory } = useOpenCategory();
  const [searchParams] = useSearchParams();
  const { businessId } = useBusinessStore();
  const categoryType = searchParams.get('category');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: selectedCategory?.name ?? '',
    },
  });

  const [insertCategroy] = useInsertCategoryMutation();
  const [updateCategory] = useUpdateCategoryTransactionByPkMutation();
  const handleSubmit = (values: FormValues) => {
    if (selectedCategory?.id) {
      toast.loading('category update in progress', {
        id: 'category-edit',
      });
      updateCategory({
        variables: {
          pkColumns: {
            id: selectedCategory?.id,
          },
          set: {
            name: values.name,
          },
        },
        onCompleted: () => {
          toast.dismiss('category-edit');
          toast.success('Category Updated');
          closeSheet();
          refetch();
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('category creation in progress', {
        id: 'category-creation',
      });
      insertCategroy({
        variables: {
          object: {
            name: values.name,
            type: categoryType?.toUpperCase(),
            business_id: Number(businessId),
          },
        },
        onCompleted: () => {
          toast.dismiss('category-creation');
          toast.success('Category Created');
          closeSheet();
          refetch();
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    }
  };

  const handleDelete = () => {
    onDelete?.();
  };

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
                  disabled={disabled}
                  placeholder="e.g. Food, Travel, etc."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          disabled={
            disabled || !form.formState.isDirty || !form.formState.isValid
          }
        >
          {selectedCategory?.id ? 'Save changes' : 'Create category'}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full"
            variant="outline"
          >
            <Trash className="mr-2 size-4" />
            Delete category
          </Button>
        )}
      </form>
    </Form>
  );
};
