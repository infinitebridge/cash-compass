import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@cash-compass/ui/dialog';
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from 'react';
import { Button } from '@cash-compass/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RevenueManagementTabs from '../revenue-tabs';
import { RevenueForm } from './basic-info-form';
import RevenueDetailsForm from './details-form';
import InvoiceForm from './invoice-form';
import NavigationBtn from './navigation-btn';

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

const DialogWrapper = ({
  title,
  children,
  trigger,
  activeTab,
  setActiveTab,
  open,
  onClose,
}: Props) => {
  // Initialize with empty objects to prevent undefined errors
  const [formData, setFormData] = useState<Record<number, any>>({
    0: {}, // Basic info tab
    1: {}, // Details tab
    2: {}, // Invoice options tab
  });
  const [validationTrigger, setValidationTrigger] = useState(false);
  // Track form validation state for each tab
  const [formValidation, setFormValidation] = useState<Record<number, boolean>>(
    {
      0: false, // Basic info tab initially invalid
      1: false, // Details tab initially invalid
      2: false, // Invoice options tab initially invalid
    }
  );
  // Track if we're attempting to navigate
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle form validation results
  const handleFormValid = (data: any, isValid: boolean) => {
    // Store form data for current tab
    setFormData((prev) => ({
      ...prev,
      [activeTab]: data,
    }));

    // Update validation state for current tab
    setFormValidation((prev) => ({
      ...prev,
      [activeTab]: isValid,
    }));

    // Handle navigation if we were triggered by Next button
    if (isNavigating && isValid && activeTab < 2) {
      // We need to reset the validation trigger first to avoid issues
      setValidationTrigger(false);
      setIsNavigating(false);

      // Use setTimeout to ensure state updates happen before navigation
      setTimeout(() => {
        setActiveTab(activeTab + 1);
      }, 50);
    } else {
      // If we were navigating but validation failed, reset the flags
      if (isNavigating) {
        setIsNavigating(false);
      }
    }
  };

  // Function to check if all required forms are valid for submission
  const areFormsValid = () => {
    // Always require Basic Info (tab 0) to be valid
    if (!formValidation[0]) return false;

    // If we've moved past Details tab, require it to be valid
    if (activeTab > 0 && !formValidation[1]) return false;

    // For the Invoice tab (2), only check validation if:
    // 1. We're on that tab, AND
    // 2. The createInvoice checkbox is checked
    if (activeTab === 2) {
      const createInvoiceChecked = formData[2]?.createInvoice;

      // If createInvoice is checked, require validation
      if (createInvoiceChecked && !formValidation[2]) {
        return false;
      }

      // If createInvoice is not checked, ignore validation for tab 2
    }

    // If all required validations pass, we're good to go
    return true;
  };

  // Handle Next button click
  const handleNextClick = () => {
    console.log('Next clicked, triggering validation for tab', activeTab);
    setIsNavigating(true);
    setValidationTrigger(true);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Validate current tab
    setValidationTrigger(true);

    // Use a small timeout to ensure validation has time to process
    setTimeout(() => {
      if (areFormsValid()) {
        // Prepare final data for submission
        // If createInvoice is unchecked, we can omit the invoice details
        const finalData = {
          ...formData[0],
          ...formData[1],
          ...(formData[2]?.createInvoice
            ? formData[2]
            : { createInvoice: false }),
        };

        console.log('All forms valid! Submitting data:', finalData);
        onClose();
      } else {
        console.log('Form validation failed. Cannot submit.', formValidation);
        setValidationTrigger(false);
      }
    }, 100);
  };

  // Debug outputs
  console.log('Current tab:', activeTab);
  console.log('Form validation status:', formValidation);
  console.log('Form data:', formData);

  const tabsConfig = [
    {
      title: 'Basic Info',
      key: 'basic-info',
      component: (
        <RevenueForm
          onValid={handleFormValid}
          triggerSubmit={validationTrigger && activeTab === 0}
          initialData={formData[0]}
        />
      ),
    },
    {
      title: 'Details',
      key: 'details',
      component: (
        <RevenueDetailsForm
          onValid={handleFormValid}
          triggerSubmit={validationTrigger && activeTab === 1}
          initialData={formData[1]} // Use data from tab 1, not tab 0
        />
      ),
    },
    {
      title: 'Invoice options',
      key: 'options',
      component: (
        <InvoiceForm
          onValid={handleFormValid}
          triggerSubmit={validationTrigger && activeTab === 2}
          initialData={formData[2]} // Use data from tab 2
        />
      ),
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {trigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div className="py-2">
            <RevenueManagementTabs
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
            >
              <div className="flex flex-row gap-2 items-center px-3">
                <span>Next</span>
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
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
              disabled={!areFormsValid()}
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

export default DialogWrapper;
