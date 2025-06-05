import { z } from 'zod';

export const basicInfoFormSchema = z.object({
  revenueDate: z
    .date({
      required_error: 'Revenue date is required',
      invalid_type_error: 'Invalid date format',
    })
    .refine((date) => !isNaN(date.getTime()), {
      message: 'Invalid date selected',
    }),
  amount: z.string().min(1, 'Amount is required'),
  customer: z.string().min(1, 'Customer is required'),

  category: z.string().min(1, 'Category is required'),

  description: z
    .string()
    .max(500, 'Description must be 500 characters or less')
    .optional(),
});

export const detailsFormSchema = z.object({
  paymentMethod: z.string().min(1, {
    message: 'Please select a payment method.',
  }),
  status: z.string().min(1, {
    message: 'Please select a status.',
  }),
  referenceNumber: z
    .string()
    .max(50, 'Reference number must be 50 characters or less')
    .optional(),
  tags: z.array(z.string()).max(5, 'Maximum 5 tags allowed').optional(),
});

export const invoiceFormSchema = z
  .object({
    createInvoice: z.boolean().default(true),
    invoiceNumber: z.string().optional(),
    dueDate: z.date().optional(),
    paymentTerms: z.string().optional(),
    notes: z
      .string()
      .max(1000, 'Notes must be 1000 characters or less')
      .optional(),
    sendImmediately: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (data.createInvoice) {
        return data.invoiceNumber && data.invoiceNumber.length > 0;
      }
      return true;
    },
    {
      message: 'Invoice number is required.',
      path: ['invoiceNumber'],
    }
  )
  .refine(
    (data) => {
      if (data.createInvoice) {
        return data.dueDate !== undefined;
      }
      return true;
    },
    {
      message: 'Due date is required.',
      path: ['dueDate'],
    }
  )
  .refine(
    (data) => {
      if (data.createInvoice) {
        return data.paymentTerms && data.paymentTerms.length > 0;
      }
      return true;
    },
    {
      message: 'Payment terms are required.',
      path: ['paymentTerms'],
    }
  );

export type InvoiceFormSchemaType = z.infer<typeof invoiceFormSchema>;
export type DetailsFormSchemaType = z.infer<typeof detailsFormSchema>;
export type BasicInfoFormSchemaType = z.infer<typeof basicInfoFormSchema>;
