import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useMemo,
} from 'react';

// Types
export interface FormData {
  basicInfo: Record<string, any>;
  details: Record<string, any>;
  invoice: Record<string, any>;
}

export interface FormValidation {
  basicInfo: boolean;
  details: boolean;
  invoice: boolean;
}

export interface TouchedFields {
  basicInfo: Record<string, boolean>;
  details: Record<string, boolean>;
  invoice: Record<string, boolean>;
}

export interface FormErrors {
  basicInfo: Record<string, string>;
  details: Record<string, string>;
  invoice: Record<string, string>;
}

export interface FormValidationContextType {
  formData: FormData;
  formValidation: FormValidation;
  touchedFields: TouchedFields;
  formErrors: FormErrors;
  validationTrigger: boolean;
  isNavigating: boolean;
  isDialogValidating: boolean;

  // Actions
  updateFormData: (formKey: keyof FormData, data: any) => void;
  updateFormValidation: (
    formKey: keyof FormValidation,
    isValid: boolean
  ) => void;
  setFieldTouched: (
    formKey: keyof FormData,
    fieldName: string,
    touched?: boolean
  ) => void;
  setFieldError: (
    formKey: keyof FormData,
    fieldName: string,
    error: string
  ) => void;
  clearFieldError: (formKey: keyof FormData, fieldName: string) => void;
  setValidationTrigger: (trigger: boolean) => void;
  setIsNavigating: (navigating: boolean) => void;
  setIsDialogValidating: (validating: boolean) => void;
  resetFormContext: () => void;
  validateAllForms: () => Promise<boolean>;
  validateForm: (formKey: keyof FormData) => Promise<boolean>;

  // Computed values
  areFormsValid: (activeTab?: number) => boolean;
  isFieldTouched: (formKey: keyof FormData, fieldName: string) => boolean;
  getFieldError: (
    formKey: keyof FormData,
    fieldName: string
  ) => string | undefined;
  hasAnyErrors: () => boolean;
  getFormErrors: (formKey: keyof FormData) => Record<string, string>;
  isDialogValid: () => boolean;
}

const FormValidationContext = createContext<
  FormValidationContextType | undefined
>(undefined);

const initialFormData: FormData = {
  basicInfo: {},
  details: {},
  invoice: {},
};

const initialFormValidation: FormValidation = {
  basicInfo: false,
  details: false,
  invoice: false,
};

const initialTouchedFields: TouchedFields = {
  basicInfo: {},
  details: {},
  invoice: {},
};

const initialFormErrors: FormErrors = {
  basicInfo: {},
  details: {},
  invoice: {},
};

export const FormValidationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formValidation, setFormValidation] = useState<FormValidation>(
    initialFormValidation
  );
  const [touchedFields, setTouchedFields] =
    useState<TouchedFields>(initialTouchedFields);
  const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);
  const [validationTrigger, setValidationTrigger] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isDialogValidating, setIsDialogValidating] = useState(false);

  const updateFormData = useCallback((formKey: keyof FormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [formKey]: data,
    }));
  }, []);

  const updateFormValidation = useCallback(
    (formKey: keyof FormValidation, isValid: boolean) => {
      setFormValidation((prev) => ({
        ...prev,
        [formKey]: isValid,
      }));
    },
    []
  );

  const setFieldTouched = useCallback(
    (formKey: keyof FormData, fieldName: string, touched = true) => {
      setTouchedFields((prev) => ({
        ...prev,
        [formKey]: {
          ...prev[formKey],
          [fieldName]: touched,
        },
      }));
    },
    []
  );

  const setFieldError = useCallback(
    (formKey: keyof FormData, fieldName: string, error: string) => {
      setFormErrors((prev) => ({
        ...prev,
        [formKey]: {
          ...prev[formKey],
          [fieldName]: error,
        },
      }));
    },
    []
  );

  const clearFieldError = useCallback(
    (formKey: keyof FormData, fieldName: string) => {
      setFormErrors((prev) => ({
        ...prev,
        [formKey]: {
          ...prev[formKey],
          [fieldName]: '',
        },
      }));
    },
    []
  );

  const resetFormContext = useCallback(() => {
    setFormData(initialFormData);
    setFormValidation(initialFormValidation);
    setTouchedFields(initialTouchedFields);
    setFormErrors(initialFormErrors);
    setValidationTrigger(false);
    setIsNavigating(false);
    setIsDialogValidating(false);
  }, []);

  const validateForm = useCallback(
    async (formKey: keyof FormData): Promise<boolean> => {
      return new Promise((resolve) => {
        setValidationTrigger(true);

        setValidationTrigger(false);
        resolve(formValidation[formKey]);
      });
    },
    [formValidation]
  );

  const validateAllForms = useCallback(async (): Promise<boolean> => {
    setIsDialogValidating(true);

    try {
      // Trigger validation for all forms
      setValidationTrigger(true);

      // Wait for validations to complete
      await new Promise((resolve) => setTimeout(resolve, 150));

      // Check if all required forms are valid
      const basicValid = formValidation.basicInfo;
      const detailsValid = formValidation.details;

      // Invoice validation is conditional
      const createInvoiceChecked = formData.invoice?.createInvoice;
      const invoiceValid = createInvoiceChecked ? formValidation.invoice : true;

      const allValid = basicValid && detailsValid && invoiceValid;

      return allValid;
    } finally {
      setValidationTrigger(false);
      setIsDialogValidating(false);
    }
  }, [formValidation, formData.invoice?.createInvoice]);

  const areFormsValid = useCallback(
    (activeTab?: number): boolean => {
      if (!formValidation.basicInfo) return false;

      if (activeTab !== undefined && activeTab > 0 && !formValidation.details) {
        return false;
      }

      if (activeTab === 2) {
        const createInvoiceChecked = formData.invoice?.createInvoice;
        if (createInvoiceChecked && !formValidation.invoice) {
          return false;
        }
      }

      return true;
    },
    [formValidation, formData.invoice?.createInvoice]
  );

  const isFieldTouched = useCallback(
    (formKey: keyof FormData, fieldName: string): boolean => {
      return touchedFields[formKey][fieldName] || false;
    },
    [touchedFields]
  );

  const getFieldError = useCallback(
    (formKey: keyof FormData, fieldName: string): string | undefined => {
      const error = formErrors[formKey][fieldName];
      return error && error.trim() ? error : undefined;
    },
    [formErrors]
  );

  const hasAnyErrors = useCallback((): boolean => {
    return Object.values(formErrors).some((formErrorObj) =>
      Object.values(formErrorObj).some((error) => error)
    );
  }, [formErrors]);

  const getFormErrors = useCallback(
    (formKey: keyof FormData): Record<string, string> => {
      return formErrors[formKey];
    },
    [formErrors]
  );

  const isDialogValid = useCallback((): boolean => {
    const basicValid = formValidation.basicInfo;
    const detailsValid = formValidation.details;
    const createInvoiceChecked = formData.invoice?.createInvoice;
    const invoiceValid = createInvoiceChecked ? formValidation.invoice : true;

    return basicValid && detailsValid && invoiceValid && !hasAnyErrors();
  }, [formValidation, formData.invoice?.createInvoice, hasAnyErrors]);

  const contextValue: FormValidationContextType = useMemo(
    () => ({
      formData,
      formValidation,
      touchedFields,
      formErrors,
      validationTrigger,
      isNavigating,
      isDialogValidating,
      updateFormData,
      updateFormValidation,
      setFieldTouched,
      setFieldError,
      clearFieldError,
      setValidationTrigger,
      setIsNavigating,
      setIsDialogValidating,
      resetFormContext,
      validateAllForms,
      validateForm,
      areFormsValid,
      isFieldTouched,
      getFieldError,
      hasAnyErrors,
      getFormErrors,
      isDialogValid,
    }),
    [
      formData,
      formValidation,
      touchedFields,
      formErrors,
      validationTrigger,
      isNavigating,
      isDialogValidating,
      updateFormData,
      updateFormValidation,
      setFieldTouched,
      setFieldError,
      clearFieldError,
      setValidationTrigger,
      setIsNavigating,
      setIsDialogValidating,
      resetFormContext,
      validateAllForms,
      validateForm,
      areFormsValid,
      isFieldTouched,
      getFieldError,
      hasAnyErrors,
      getFormErrors,
      isDialogValid,
    ]
  );

  return (
    <FormValidationContext.Provider value={contextValue}>
      {children}
    </FormValidationContext.Provider>
  );
};

export const useFormValidation = (): FormValidationContextType => {
  const context = useContext(FormValidationContext);
  if (context === undefined) {
    throw new Error(
      'useFormValidation must be used within a FormValidationProvider'
    );
  }
  return context;
};
