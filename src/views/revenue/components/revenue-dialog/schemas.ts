import { z } from 'zod';

const basicInfoFormSchema = z.object({
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

export { basicInfoFormSchema };
