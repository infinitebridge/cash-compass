import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@cash-compass/ui/dialog';
import { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';
import { Button } from '@cash-compass/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RevenueForm } from './basic-info-form';
import RevenueDetailsForm from './details-form';
import InvoiceForm from './invoice-form';
import NavigationBtn from './navigation-btn';
import CustomRevenueManagementTabs from '../revenue-tabs/custom-tabs';
import {
  FormValidationProvider,
  useFormValidation,
} from '../../../context/form-validation-context';

type Props = {
  title: string;
  children?: ReactNode;
  trigger: ReactNode;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// Inner component that uses the validation context
const DialogContentInner = ({
  title,
  children,
  trigger,
  activeTab,
  setActiveTab,
  open,
  onClose,
}: Props) => {
  const {
    formData,
    formValidation,
    validationTrigger,
    isNavigating,
    isDialogValidating,
    setIsNavigating,
    setValidationTrigger,
    areFormsValid,
    isDialogValid,
    validateAllForms,
    resetFormContext,
  } = useFormValidation();

  // Reset context when dialog opens
  useEffect(() => {
    if (open) {
      resetFormContext();
    }
  }, [open, resetFormContext]);

  // Handle Next button click with improved navigation logic
  const handleNextClick = async () => {
    console.log('Next clicked, validating current tab:', activeTab);
    setIsNavigating(true);
    setValidationTrigger(true);

    // Wait a bit for validation to process
    setTimeout(() => {
      const currentTabValid = getCurrentTabValidation();

      if (currentTabValid && activeTab < 2) {
        setActiveTab(activeTab + 1);
      }

      setIsNavigating(false);
      setValidationTrigger(false);
    }, 150);
  };

  // Get current tab validation status
  const getCurrentTabValidation = () => {
    const createInvoiceChecked = formData.invoice?.createInvoice;

    switch (activeTab) {
      case 0:
        return formValidation.basicInfo;
      case 1:
        return formValidation.details;
      case 2:
        return createInvoiceChecked ? formValidation.invoice : true;
      default:
        return false;
    }
  };

  // Handle form submission with enhanced validation
  const handleSubmit = async () => {
    console.log('Submit clicked, validating all forms...');

    try {
      const isValid = await validateAllForms();

      if (isValid) {
        // Prepare final data for submission
        const finalData = {
          ...formData.basicInfo,
          ...formData.details,
          ...(formData.invoice?.createInvoice
            ? formData.invoice
            : { createInvoice: false }),
        };

        console.log('All forms valid! Submitting data:', finalData);
        onClose();

        // TODO: Add your actual submission logic here
        // await submitRevenueData(finalData);
      } else {
        console.log('Form validation failed:', {
          basicInfo: formValidation.basicInfo,
          details: formValidation.details,
          invoice: formValidation.invoice,
          formData: formData,
        });
      }
    } catch (error) {
      console.error('Validation error:', error);
    }
  };

  // Enhanced tab configuration with better data passing
  const tabsConfig = [
    {
      title: 'Basic Info',
      key: 'basic-info',
      component: (
        <RevenueForm
          // Remove the old props and let the form component use the context directly
          triggerSubmit={validationTrigger && activeTab === 0}
          isNavigating={isNavigating && activeTab === 0}
        />
      ),
    },
    {
      title: 'Details',
      key: 'details',
      component: (
        <RevenueDetailsForm
          triggerSubmit={validationTrigger && activeTab === 1}
          isNavigating={isNavigating && activeTab === 1}
        />
      ),
    },
    {
      title: 'Invoice options',
      key: 'options',
      component: (
        <InvoiceForm
          triggerSubmit={validationTrigger && activeTab === 2}
          isNavigating={isNavigating && activeTab === 2}
        />
      ),
    },
  ];

  // Debug outputs (can be removed in production)
  console.log('Current tab:', activeTab);
  console.log('Form validation status:', formValidation);
  console.log('Form data:', formData);
  console.log('Is dialog valid:', isDialogValid());

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {trigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div className="py-2">
            <CustomRevenueManagementTabs
              tabsConfig={tabsConfig}
              defaultTab={tabsConfig[0].key}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </DialogHeader>

        {/* Navigation */}
        <div className="flex flex-row items-center gap-8 mt-6">
          {activeTab > 0 && (
            <NavigationBtn
              action={() => setActiveTab((prev) => prev - 1)}
              className="flex-none"
              // disabled={isDialogValidating}
            >
              <div className="flex flex-row gap-2 items-center px-3">
                <ChevronLeft className="h-3 w-3" />
                <span>Prev</span>
              </div>
            </NavigationBtn>
          )}
          {activeTab < tabsConfig.length - 1 && (
            <NavigationBtn
              action={handleNextClick}
              className={activeTab > 0 ? 'ml-auto' : 'ml-auto'}
              // disabled={isDialogValidating || isNavigating}
            >
              <div className="flex flex-row gap-2 items-center px-3">
                <span>{isNavigating ? 'Validating...' : 'Next'}</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </NavigationBtn>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <div className="flex-1"></div>
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300"
              onClick={onClose}
              disabled={isDialogValidating}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
              disabled={!isDialogValid() || isDialogValidating}
              onClick={handleSubmit}
            >
              {isDialogValidating ? 'Validating...' : 'Save Revenue'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main component wrapper with FormValidationProvider
const DialogWrapper = (props: Props) => {
  return (
    <FormValidationProvider>
      <DialogContentInner {...props} />
    </FormValidationProvider>
  );
};

export default DialogWrapper;
