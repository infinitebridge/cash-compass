import { createContext, useContext } from 'react';

interface RevenueDialogContextValue {
  valid: boolean;
  updateBasicTabValidation: (value: boolean) => void;
  updateInvoiceTabValidation: (value: boolean) => void;
  updateDetailsTabValidation: (value: boolean) => void;

  basicFormData: any;
  detailsFormData: any;
  settingsFormData: any;

  fillBasicFormState: (values: any) => void;
  fillDetailsFormState: (values: any) => void;
  fillSettingsFormState: (values: any) => void;
}
export const RevenueDialogContext = createContext<
  RevenueDialogContextValue | undefined
>(undefined);

export const useRevenueDialogContext = (): RevenueDialogContextValue => {
  const context = useContext(RevenueDialogContext);
  if (context === undefined) {
    throw new Error('Dialog components must be used within a Dialog');
  }
  return context;
};
