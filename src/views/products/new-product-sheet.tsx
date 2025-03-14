import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@finbridge-manager-apps/ui';
import { ProductForm } from './components/product-form';
import { useNewProduct } from './hooks/use-new-project';

export const NewProductSheet = () => {
  const { isOpen, onClose } = useNewProduct();

  const handleClose = () => {
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Product</SheetTitle>
          <SheetDescription>Add a new product</SheetDescription>
        </SheetHeader>

        <ProductForm
          disabled={false}
          onCreateCategory={() => {
            return;
          }}
          onClose={handleClose}
          onCreateAccount={() => {
            //
          }}
        />
      </SheetContent>
    </Sheet>
  );
};
