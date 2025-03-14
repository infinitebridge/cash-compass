import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Textarea,
} from '@finbridge-manager-apps/ui';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import useRecordStore from '../../../../zustand/record-store';

const formSchema = z.object({
  quantity: z.number(),
  rate: z.number(),
  description: z.string(),
});

const NewRecordModal = () => {
  const { addItem } = useRecordStore();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      quantity: 0,
      rate: 0,
      description: '',
    },
  });

  function submit(values: z.infer<typeof formSchema>) {
    addItem({
      quantity: values.quantity,
      rate: values.rate,
      description: values.description,
    });
    form.reset();
    setIsOpen(false);
  }

  return (
    <div>
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
          <span>Add Record</span>
        </Button>
        <DialogContent className="sm:max-w-[425px]">
          <form
            onSubmit={form.handleSubmit(submit)}
            className="mt-5 flex flex-col gap-4"
          >
            <DialogHeader>
              <DialogTitle>New Record</DialogTitle>
              <DialogDescription>
                Add new record to the table, the total will be calculated.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                {...form.register('quantity')}
                id="quantity"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rate" className="text-right">
                Rate
              </Label>
              <Input
                {...form.register('rate')}
                id="rate"
                className="col-span-3"
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                {...form.register('description')}
                id="description"
                name="description"
              />
            </div>
            <DialogFooter>
              <Button type="submit">Add Record</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewRecordModal;
