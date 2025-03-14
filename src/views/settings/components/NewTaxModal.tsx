import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@finbridge-manager-apps/ui';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import {
  useInsertTaxMutation,
  useUdpateTaxByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useTaxStore } from '../../../zustand/tax-store';
import { useGetTaxes } from '../hooks/useGetTaxes';

const formSchema = z.object({
  name: z.string(),
  rate: z.number().min(1),
  isDefault: z.boolean().optional().default(false),
});

const NewTaxModal = () => {
  const { businessId } = useBusinessStore();
  const [insertTaxItem] = useInsertTaxMutation();
  const [updateTaxItem] = useUdpateTaxByPkMutation();
  const { reloadTaxes } = useGetTaxes();
  const { tax, isOpen, onOpen, onClose } = useTaxStore();

  const form = useForm<z.infer<typeof formSchema>>();

  const { isValid, isSubmitting } = form.formState;

  function closeModal() {
    onClose();
    form.reset();
  }

  function showModal() {
    onOpen();
  }

  function submit(values: z.infer<typeof formSchema>) {
    if (!tax?.id) {
      toast.loading('Inserting the tax ...', { id: 'new-tax' });

      insertTaxItem({
        variables: {
          object: {
            name: values.name,
            amount: values.rate,
            default: values.isDefault,
            business_id: businessId,
          },
        },
        onCompleted: () => {
          toast.dismiss('new-tax');
          toast.success('Tax added successfully');
          closeModal();
          reloadTaxes();
        },
        onError: (err) => {
          toast.dismiss('new-tax');
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('Updating the tax ...', { id: 'edit-tax' });

      updateTaxItem({
        variables: {
          pkColumns: {
            id: Number(tax?.id),
          },
          set: {
            name: values.name,
            amount: values.rate,
            default: values.isDefault,
          },
        },
        onCompleted: () => {
          toast.dismiss('edit-tax');
          toast.success('Tax updated successfully');
          closeModal();
          reloadTaxes();
        },
        onError: (err) => {
          toast.dismiss('edit-tax');
          toast.error(err.message);
        },
      });
    }
  }

  useEffect(() => {
    if (tax) {
      form.reset({
        name: tax?.name,
        rate: Number(tax?.amount),
        isDefault: tax?.default,
      });
    }
  }, [tax, form]);

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <Button
        variant={'link'}
        className="flex cursor-pointer justify-end underline"
        onClick={showModal}
      >
        Add Tax
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Tax Item</DialogTitle>
          <DialogDescription>Create tax item directly</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="space-y-4 pt-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
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
                    <Input placeholder="tax rate" type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Checkbox for "Set as Default" */}
            <FormField
              name="isDefault"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        onCheckedChange={(checked) =>
                          form.setValue('isDefault', !!checked)
                        }
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="w-full" disabled={isSubmitting || !isValid}>
              {!tax?.id ? 'Add' : 'Save'}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default NewTaxModal;
