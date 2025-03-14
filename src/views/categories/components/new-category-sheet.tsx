import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { useNewCategory } from '../hooks/use-new-category';
import { useOpenCategory } from '../hooks/use-open-category';
import { CategoryForm } from './category-form';
// const formSchema = z.object({
//   name: z.string(),
// });

// type FormValues = z.input<typeof formSchema>;

export const NewCategorySheet = () => {
  const { isOpen, onClose } = useNewCategory();
  const { isEditOpen, onEditClose, setSelectedCategory } = useOpenCategory();

  function handleClose() {
    onEditClose();
    onClose();
    setSelectedCategory(null);
  }

  return (
    <Sheet open={isOpen || isEditOpen} onOpenChange={handleClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to organize your transactions.
          </SheetDescription>
        </SheetHeader>
        <CategoryForm closeSheet={handleClose} />
      </SheetContent>
    </Sheet>
  );
};
