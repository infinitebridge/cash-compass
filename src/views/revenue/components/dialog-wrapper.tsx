import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@cash-compass/ui/dialog';
import { Dispatch, ReactNode, SetStateAction } from 'react';
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
  const tabsConfig = [
    {
      title: 'Basic Info',
      component: <RevenueForm />,
      key: 'basic-info',
    },
    {
      title: 'Details',
      component: <RevenueDetailsForm />,
      key: 'details',
    },
    {
      title: 'Invoice options',
      component: <InvoiceForm />,
      key: 'options',
    },
  ];

  function goNext() {
    if (activeTab < tabsConfig.length - 1) {
      setActiveTab((prev) => prev + 1);
    }
  }

  function returnBack() {
    if (activeTab > 0) {
      setActiveTab((prev) => prev - 1);
    }
  }

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

        {/* Render the active tab component */}

        {/* Navigation */}
        <div className="flex flex-row items-center gap-8 mt-4">
          {activeTab > 0 && (
            <NavigationBtn action={returnBack}>
              <div className="flex flex-row gap-2 items-center">
                <ChevronLeft className="h-3 w-3" />
                <span>Prev</span>
              </div>
            </NavigationBtn>
          )}
          {activeTab < tabsConfig.length - 1 && (
            <NavigationBtn action={goNext}>
              <div className="flex flex-row gap-2 items-center">
                <span>Next</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </NavigationBtn>
          )}
        </div>

        <hr className="my-6" />

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
              disabled={false}
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
