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

type Props = {
  title: string;
  children: ReactNode;
  trigger: ReactNode;
  activeTab: number;
  tabs: string[];
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
  tabs,
  open,
  onClose,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      {trigger}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div>
            {tabs && (
              <Tabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            )}
          </div>
        </DialogHeader>

        <>{children}</>
        <Button
          type="button"
          variant="outline"
          className="text-blue-600 font-medium ml-auto"
        >
          Next: Details <ChevronRight className="ml-1 h-5 w-5" />
        </Button>
        <hr />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
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
