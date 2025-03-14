'use client';

import { PencilIcon } from 'lucide-react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { CoreRow } from '@tanstack/react-table';
import { toast } from 'sonner';
import { DeleteAlertDialog } from '../../../components/alert-dialog';
import { useDeleteCategoryByPkMutation } from '../../../graphql';
import { useConfirm } from '../../../hooks/use-confirm';
import { useGetCategories } from '../hooks/use-get-categories';
import { useOpenCategory } from '../hooks/use-open-category';
import { Category } from './types';

type Props = {
  data: CoreRow<Category>['original'];
};

export const CategoryActions = ({ data }: Props) => {
  const [ConfirmDialog, confirm] = useConfirm(
    'Are you sure?',
    'You are about to delete this category.'
  );
  const { refetch } = useGetCategories();

  const [deleteCategory] = useDeleteCategoryByPkMutation();
  const { onEditOpen, setSelectedCategory } = useOpenCategory();

  function handleEdit() {
    setSelectedCategory({
      id: data?.id,
      name: data?.name,
    });
    onEditOpen();
  }

  function removeCategory() {
    toast.loading('Removing Category', { id: 'remove-category' });
    deleteCategory({
      variables: {
        deleteCategoryTransactionByPkId: Number(data?.id),
      },
      onCompleted: () => {
        toast.dismiss('remove-category');
        toast.success('Category removed');
        refetch();
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
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
          onDelete={removeCategory}
          title={'Are you sure you want to delete this category ?'}
          description="This action cannot be undone. This will permanently delete this user
        and remove his data from our servers."
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
