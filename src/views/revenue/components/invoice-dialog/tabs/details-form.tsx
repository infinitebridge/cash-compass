import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Button,
} from '@cash-compass/ui';
import { DetailsFormSchema } from '../schemas';
import { TrashIcon } from 'lucide-react';

export const DetailsForm = () => {
  const form = useForm({
    resolver: zodResolver(DetailsFormSchema),
    defaultValues: {
      items: [{ description: '', quantity: 1, unitPrice: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'items',
  });

  const onSubmit = (data: any) => {
    const total = data.items.reduce(
      (sum: number, item: { quantity: number; unitPrice: number }) =>
        sum + item.quantity * item.unitPrice,
      0
    );
    console.log({ ...data, total });
  };

  const calculateTotal = () => {
    const values = form.getValues();
    return values.items.reduce(
      (sum, item) => sum + (item.quantity || 0) * (item.unitPrice || 0),
      0
    );
  };

  return (
    <div>
      <div className="flex flex-row items-center mb-4">
        <h2>Line Items</h2>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto"
          onClick={() => append({ description: '', quantity: 1, unitPrice: 0 })}
        >
          + Add Item
        </Button>
      </div>
      <div className="border p-2 rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Description</th>
                    <th className="text-left p-2">Quantity</th>
                    <th className="text-left p-2">Unit Price</th>
                    <th className="text-left p-2">Amount</th>
                    <th className="text-left p-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {fields.map((field, index) => (
                    <tr key={field.id}>
                      <td className="p-2">
                        <FormField
                          control={form.control}
                          name={`items.${index}.description`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  placeholder="Item description"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="p-2">
                        <FormField
                          control={form.control}
                          name={`items.${index}.quantity`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  value={field.value || ''}
                                  onChange={(e) =>
                                    field.onChange(
                                      parseInt(e.target.value) || 0
                                    )
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="p-2">
                        <FormField
                          control={form.control}
                          name={`items.${index}.unitPrice`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  value={field.value || ''}
                                  onChange={(e) =>
                                    field.onChange(
                                      parseFloat(e.target.value) || 0
                                    )
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </td>
                      <td className="p-2">
                        <p>
                          $
                          {form.watch(`items.${index}.quantity`) *
                            form.watch(`items.${index}.unitPrice`) || 0}
                        </p>
                      </td>
                      <td className="p-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          type="button"
                          onClick={() => remove(index)}
                        >
                          <TrashIcon className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </Form>
      </div>
      <hr className="my-3" />
      <div className="flex justify-end">
        <div className="space-y-2 flex-col w-[15rem] text-sm text-gray-600">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>${calculateTotal()}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax (0%):</p>
            <p>$0.00</p>
          </div>
          <hr />
          <div className="flex justify-between font-bold">
            <p>Total:</p>
            <p>${calculateTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
