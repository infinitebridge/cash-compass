import { z } from 'zod';

const BasicInfoFormSchema = z.object({
  invoiceNumber: z.string().min(1, 'Invoice number is required'),
  invoiceDate: z.date(),
  dueDate: z.date(),
  customer: z.string().min(1, 'Customer is required'),
  referenceNumber: z.string().optional(),
  paymentTerms: z.string().min(1, 'Payment terms are required'),
});

const DetailsFormSchema = z.object({
  items: z.array(
    z.object({
      description: z.string().min(1, { message: 'Description is required' }),
      quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
      unitPrice: z
        .number()
        .min(0, { message: 'Unit price cannot be negative' }),
    })
  ),
});

export const settingsFormSchema = z.object({
  customerNotes: z.string().optional(),
  internalNotes: z.string().optional(),
  applyTax: z.boolean().default(false),
  sendImmediately: z.boolean().default(false),
});

export { BasicInfoFormSchema, DetailsFormSchema };

export type BasicInfoFormSchemaType = z.infer<typeof BasicInfoFormSchema>;
export type DetailsFormSchemaType = z.infer<typeof DetailsFormSchema>;
export type SettingsFormSchemaType = z.infer<typeof settingsFormSchema>;
