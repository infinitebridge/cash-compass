import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
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
} from '@finbridge-manager-apps/ui';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Select } from '../../../components/select';
import {
  useGetCategoryTransactionQuery,
  useInsertProductMutation,
  useUpdateProductByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useGetProducts } from '../hooks/use-get-products';
import { useNewProduct } from '../hooks/use-new-project';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  initial_price: z.preprocess(
    (value) => Number(value),
    z
      .number()
      .positive('Rate must be a positive number')
      .min(1, 'Rate is required')
  ),
  stock: z.coerce.number().optional(),
  category_id: z.string(),
  description: z.string().nullable().optional(),
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

export const ProductForm = ({
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
  const [createProduct] = useInsertProductMutation();
  const [updateProduct] = useUpdateProductByPkMutation();
  const { reloadProducts } = useGetProducts();
  const { businessId } = useBusinessStore();

  const [disableStockField, setDisableStockField] = useState(false);
  const { selectedProduct } = useNewProduct();

  function toggleStockFieldDisplay() {
    setDisableStockField((prev) => !prev);
  }

  const { data: incomeCategories } = useGetCategoryTransactionQuery({
    variables: {
      where: {
        type: {
          _eq: 'INCOME',
        },
      },
    },
    nextFetchPolicy: 'cache-and-network',
  });

  const handleSubmit = (values: FormValues) => {
    if (selectedProduct?.id) {
      toast.loading('Updating product information...', { id: 'product-edit' });

      updateProduct({
        variables: {
          pkColumns: {
            id: selectedProduct?.id,
          },
          set: {
            name: values.name,
            initial_price: values.initial_price,
            initial_stock: values.stock,
            description: values.description,
            income_category_id: Number(values.category_id),
          },
        },
        onCompleted: () => {
          toast.dismiss('product-edit');
          toast.success('Product Infomration updated');
          onClose();
          reloadProducts();
        },
        onError: (err) => {
          toast.dismiss('product-creation');
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('Product creation...', { id: 'product-creation' });

      createProduct({
        variables: {
          object: {
            name: values.name,
            initial_price: values.initial_price,
            initial_stock: values.stock,
            description: values.description,
            income_category_id: Number(values.category_id),
            business_id: Number(businessId),
            current_stock: values.stock,
          },
        },
        onCompleted: () => {
          toast.dismiss('product-creation');
          toast.success('Product Created');
          onClose();
          reloadProducts();
        },
        onError: (err) => {
          toast.dismiss('product-creation');
          toast.error(err.message);
        },
      });
    }
  };

  const handleDelete = () => {
    toast.success('Deleting Product...');
    // handle deletion logic
  };

  const formattedCategories = useMemo(() => {
    return incomeCategories?.category_transaction.map((category) => {
      return {
        value: category?.id.toString(),
        label: category?.name,
      };
    });
  }, [incomeCategories?.category_transaction]);

  useEffect(() => {
    if (selectedProduct) {
      form.reset({
        name: selectedProduct?.name,
        initial_price: selectedProduct?.initial_price,
        description: selectedProduct?.description,
        category_id: selectedProduct?.income_category_id.toString(),
        stock: selectedProduct?.stock.current_stock,
      });
    }
  }, [form, selectedProduct]);

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
                  placeholder="Enter the project name"
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="initial_price"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>The initial amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter the initial amount"
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="category_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select {...field} options={formattedCategories} />
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
        <div className="flex flex-row items-start justify-start space-x-2">
          <Checkbox
            className="mt-1"
            checked={disableStockField}
            onCheckedChange={toggleStockFieldDisplay}
          />{' '}
          <div>
            <p className="text-sm">Track Inventory</p>
            <p className="text-xs font-normal text-gray-400">
              Track your current stock. When you invoice for an item your
              inventory will decrease. When you receive more, you can update
              your inventory here.
            </p>
          </div>
        </div>
        <FormField
          name="stock"
          disabled={!disableStockField}
          control={form.control}
          render={({ field }) => (
            <FormItem aria-disabled={disableStockField}>
              <FormLabel
                className={!disableStockField ? 'text-gray-300' : '40'}
              >
                Stock
              </FormLabel>

              <FormControl>
                <Input type="number" {...field} placeholder="Enter the stock" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={!isValid}>
          {selectedProduct?.id ? 'Save changes' : 'Create Project'}
        </Button>
        {!!selectedProduct?.id && (
          <Button
            type="button"
            onClick={handleDelete}
            className="mt-2 w-full"
            variant="outline"
            disabled={disabled}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete Product
          </Button>
        )}
      </form>
    </Form>
  );
};
