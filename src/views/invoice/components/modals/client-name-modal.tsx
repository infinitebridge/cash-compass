import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@finbridge-manager-apps/ui';
import { PenIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Select } from '../../../../components/select';
import useClientInfoStore from '../../../../zustand/client-store';
import { useGetPeople } from '../../../clients/hooks/use-get-people';

const formSchema = z.object({
  client_id: z.string(),
});

export function ClientNameModal() {
  const { setClientInfo } = useClientInfoStore();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>();

  const { people } = useGetPeople();

  const submit = (values: z.infer<typeof formSchema>) => {
    const selectedClient = people?.find(
      (item) => item.id === Number(values.client_id)
    );
    setClientInfo({
      fullName: `${selectedClient?.first_name} ${selectedClient?.last_name}`,
    });
    setIsOpen(false);
  };

  const clients = useMemo(() => {
    return (
      people?.map((person) => {
        return {
          label: `${person.first_name} ${person.last_name}`,
          value: person?.id.toString(),
        };
      }) || []
    );
  }, [people]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
      }}
    >
      <Button
        variant="link"
        onClick={() => setIsOpen(true)}
        className="flex flex-row items-center gap-2 p-0 text-sm"
      >
        <PenIcon className="h-4 w-4" />
        <span className="text-sm font-normal">Add Client Name</span>
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Client Name</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submit)}
            className="flex flex-col gap-2"
          >
            <FormField
              name="client_id"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client</FormLabel>
                  <FormControl>
                    <Select
                      placeholder="Select a client"
                      options={clients}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="mt-8 flex justify-end gap-3">
              <DialogClose>
                <Button type="button" variant={'outline'}>
                  Cancel
                </Button>
              </DialogClose>
              <Button variant="default">Save changes</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
