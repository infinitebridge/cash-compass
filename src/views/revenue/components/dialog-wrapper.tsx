import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@cash-compass/ui/dialog';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import Tabs from './tabs';
import { Button } from '@cash-compass/ui/button';
import { ChevronRight } from 'lucide-react';
import RevenueManagementTabs from '../revenue-tabs';
import { RevenueForm } from './basic-info-form';
import RevenueDetailsForm from './details-form';
import InvoiceForm from './invoice-form';
import NavigationBtn from './navigation-btn';

type Props = {
  title: string;
  children: ReactNode;
  trigger: ReactNode;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const DialogWrapper = ({ title, children, trigger, open, onClose }: Props) => {
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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      {trigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div className="py-2">
            <RevenueManagementTabs
              tabsConfig={tabsConfig}
              defaultTab="basic-info"
            />
          </div>
        </DialogHeader>

        <>{children}</>

        <hr />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <NavigationBtn
            children={
              <div className="flex flex-row gap-2 items-center">
                <span>Next</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            }
            action={() => console.log('ok')}
          />
          <div className="flex-1"></div>
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="flex-1 sm:flex-none border-gray-300"
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
