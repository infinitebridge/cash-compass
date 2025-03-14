import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { CoreRow } from '@tanstack/react-table';
import { PencilIcon } from 'lucide-react';
import { toast } from 'sonner';
import { DeleteAlertDialog } from '../../../components/alert-dialog';
import { useDeleteProductByPkMutation } from '../../../graphql';
import { useGetProducts } from '../hooks/use-get-products';
import { useNewProduct } from '../hooks/use-new-project';
import { Product } from './types';

type Props = {
  data: CoreRow<Product>['original'];
};

const ProductsActions = ({ data }: Props) => {
  const [deleteProduct] = useDeleteProductByPkMutation();
  const { reloadProducts } = useGetProducts();
  const { setSelectedProduct, onEditOpen } = useNewProduct();

  function handleDelete() {
    toast.loading('removing product', { id: 'delete' });
    deleteProduct({
      variables: {
        deleteProductByPkId: data.id,
      },
      onCompleted: () => {
        toast.dismiss('delete');
        toast.success('Product removed');
        reloadProducts();
      },
      onError: (err) => {
        toast.dismiss('delete');
        toast.error(err.message);
      },
    });
  }

  function handleEdit() {
    setSelectedProduct(data);
    onEditOpen(data.id);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Open menu"
          variant="ghost"
          className="data-[state=open]:bg-muted flex size-8 p-0"
        >
          <DotsHorizontalIcon className="size-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuLabel
          onClick={handleEdit}
          className="flex cursor-pointer flex-row items-center gap-2 font-normal"
        >
          <PencilIcon className="h-4 w-4" />
          <span>Edit</span>
        </DropdownMenuLabel>{' '}
        <DeleteAlertDialog
          onDelete={handleDelete}
          title={'Are you sure you want to delete this product ?'}
          description="This action cannot be undone. This will permanently delete this user
            and remove his data from our servers."
        />{' '}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsActions;
