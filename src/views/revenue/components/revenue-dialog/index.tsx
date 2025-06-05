import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@cash-compass/ui/dialog';
import { Button } from '@cash-compass/ui/button';
import { RevenueForm } from './tabs/basic-info-form';
import RevenueDetailsForm from './tabs/details-form';
import InvoiceForm from './tabs/invoice-form';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@cash-compass/ui/tabs';
import useDialogStore from './dialog-store';
import { useState } from 'react';
import {
  RevenueDialogContext,
  useRevenueDialogContext,
} from './dialog-context';
import {
  BasicInfoFormSchemaType,
  DetailsFormSchemaType,
  InvoiceFormSchemaType,
} from './schemas';
const RevenueDialogContent = () => {
  const { closeDialog: closeRevenueDialog, isOpen: isOpenRevenueDialog } =
    useDialogStore();
  const { valid, basicFormData, invoiceFormData } = useRevenueDialogContext();

  console.log({ invoiceFormData, basicFormData });
  const handleSubmit = async () => {
    console.log({ basicFormData });
    console.log('Submit clicked, validating all forms...');
  };

  const tabsConfig = [
    {
      title: 'Basic Info',
      key: 'basic-info',
      component: <RevenueForm />,
    },
    {
      title: 'Details',
      key: 'details',
      component: <RevenueDetailsForm />,
    },
    {
      title: 'Invoice options',
      key: 'options',
      component: <InvoiceForm />,
    },
  ];

  return (
    <Dialog open={isOpenRevenueDialog} onOpenChange={closeRevenueDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Record Revenue </DialogTitle>
          <div className="py-2">
            <Tabs defaultValue={'basic-info'}>
              <TabsList className="my-2">
                {tabsConfig.map((tab) => {
                  return (
                    <TabsTrigger key={tab.key} value={tab.key}>
                      {tab.title}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {tabsConfig.map((tab) => {
                return (
                  <TabsContent value={tab.key}>{tab.component}</TabsContent>
                );
              })}
            </Tabs>
          </div>
        </DialogHeader>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <div className="flex-1"></div>
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300"
              onClick={closeRevenueDialog}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
              disabled={!valid}
              onClick={handleSubmit}
            >
              Save Revenue
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const RevenueDialog = () => {
  const [isBasicTabValid, setIsBasicTabValid] = useState(false);
  const [isDetailsTabValid, setIsDetailsTabValid] = useState(false);
  const [isInvoiceTabValid, setIsInvoiceTabValid] = useState(false);

  const [basicFormData, setBasicFormData] = useState<
    BasicInfoFormSchemaType | undefined
  >();
  const [detailsFormData, setDetailsFormData] = useState<
    DetailsFormSchemaType | undefined
  >();
  const [invoiceFormData, setInvoiceFormData] = useState<
    InvoiceFormSchemaType | undefined
  >();

  const validation = isBasicTabValid && isDetailsTabValid && isInvoiceTabValid;

  return (
    <RevenueDialogContext.Provider
      value={{
        valid: validation,
        updateBasicTabValidation: (value: boolean) => {
          setIsBasicTabValid(value);
        },
        updateInvoiceTabValidation: (value: boolean) => {
          setIsInvoiceTabValid(value);
        },
        updateDetailsTabValidation: (value: boolean) => {
          setIsDetailsTabValid(value);
        },

        basicFormData,
        detailsFormData,
        invoiceFormData,

        fillBasicFormState: (values: BasicInfoFormSchemaType | undefined) => {
          setBasicFormData(values);
        },

        fillDetailsFormState: (values: DetailsFormSchemaType | undefined) => {
          setDetailsFormData(values);
        },

        fillInvoiceFormState: (values: InvoiceFormSchemaType | undefined) => {
          setInvoiceFormData(values);
        },
      }}
    >
      <RevenueDialogContent />;
    </RevenueDialogContext.Provider>
  );
};
