import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@cash-compass/ui/dialog';
import { Button } from '@cash-compass/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@cash-compass/ui/tabs';
import useDialogStore from './invoice-dialog-store';
import { useState } from 'react';
import {
  RevenueDialogContext,
  useRevenueDialogContext,
} from './dialog-context';

import { Alert, AlertTitle } from '@cash-compass/ui';
import { InfoIcon } from 'lucide-react';
import { BasicInfoForm } from './tabs/basic-info';
import { DetailsForm } from './tabs/details-form';
import {
  BasicInfoFormSchemaType,
  DetailsFormSchemaType,
  SettingsFormSchemaType,
} from './schemas';
import { SettingsForm } from './tabs/settings-form';

const RevenueDialogContent = () => {
  const { closeInvoiceDialog, isInvoiceDialogOpen } = useDialogStore();
  const { valid, basicFormData } = useRevenueDialogContext();

  const handleSubmit = async () => {
    console.log({ basicFormData });
    console.log('Submit clicked, validating all forms...');
  };

  const tabsConfig = [
    {
      title: 'Basic Info',
      key: 'basic-info',
      component: <BasicInfoForm />,
    },
    {
      title: 'Details',
      key: 'details',
      component: <DetailsForm />,
    },
    {
      title: 'Settings',
      key: 'settings',
      component: <SettingsForm />,
    },
  ];

  return (
    <Dialog open={isInvoiceDialogOpen} onOpenChange={closeInvoiceDialog}>
      <DialogContent className="sm:max-w-xl">
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
        <Alert className="p-1 text-[0.8rem] text-muted-foreground gap-2 border-none flex items-center">
          <span>
            <InfoIcon className="w-4 h-4" />
          </span>
          <AlertTitle className="m-0">
            Fields marked with * are required{' '}
          </AlertTitle>
        </Alert>
        <div className="flex flex-col sm:flex-row justify-end items-center gap-4 mt-2">
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300"
              onClick={closeInvoiceDialog}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
              disabled={!valid}
              onClick={handleSubmit}
            >
              Save Invoice
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const InvoiceDialog = () => {
  const [isBasicTabValid, setIsBasicTabValid] = useState(false);
  const [isDetailsTabValid, setIsDetailsTabValid] = useState(false);
  const [isInvoiceTabValid, setIsInvoiceTabValid] = useState(false);

  const [basicFormData, setBasicFormData] = useState<
    BasicInfoFormSchemaType | undefined
  >();
  const [detailsFormData, setDetailsFormData] = useState<
    DetailsFormSchemaType | undefined
  >();
  const [settingsFormData, setSettingsFormData] = useState<
    SettingsFormSchemaType | undefined
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
        settingsFormData,

        fillBasicFormState: (values: BasicInfoFormSchemaType | undefined) => {
          setBasicFormData(values);
        },

        fillDetailsFormState: (values: DetailsFormSchemaType | undefined) => {
          setDetailsFormData(values);
        },

        fillSettingsFormState: (values: SettingsFormSchemaType | undefined) => {
          setSettingsFormData(values);
        },
      }}
    >
      <RevenueDialogContent />
    </RevenueDialogContext.Provider>
  );
};
