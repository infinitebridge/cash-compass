import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@finbridge-manager-apps/ui';
import { PlusIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Select } from '../../../../components/select';
import { useGetProducts } from '../../../products/hooks/use-get-products';

const formSchema = z.object({
  product_id: z.string(),
});

export function ProductModal() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>();

  const { products } = useGetProducts();

  const handleSave = () => {
    setIsOpen(false);
  };

  const formattedProducts = useMemo(() => {
    return (
      products?.map((product) => {
        return {
          label: product.name,
          value: product?.id.toString(),
        };
      }) || []
    );
  }, [products]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
      }}
    >
      <Button
        variant="outline"
        className="mt-2 flex w-full justify-center gap-1 border-2 border-dashed p-3"
        onClick={() => setIsOpen(true)}
      >
        <PlusIcon className="h-4 w-4" />
        <span>Add Product</span>
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a product</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col gap-2">
            <FormField
              name="product_id"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Projects</FormLabel>
                  <FormControl>
                    <Select
                      placeholder="Select a product"
                      options={formattedProducts}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button variant="default" onClick={handleSave}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
