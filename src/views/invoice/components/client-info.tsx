import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@finbridge-manager-apps/ui';
import { format } from 'date-fns';
import { CalendarDays, Trash2 } from 'lucide-react';
import useClientInfoStore from '../../../zustand/client-store';
import { ClientNameModal } from './modals/client-name-modal';

const ClientInfo = () => {
  const { clientInfo, setClientInfo, removeClientInfo } = useClientInfoStore();

  return (
    <div className="mt-10 flex flex-row items-start justify-between">
      <div>
        <p className="text-sm text-gray-500">Billed To</p>
        {/* <div onDoubleClick={handleDoubleClick}>
          {isEditing ? (
            <input
              type="text"
              value={clientInfo.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              autoFocus
              className="border rounded p-1"
            />
          ) : (
            <p>{clientInfo.fullName}</p>
          )}
        </div> */}
        <p>{clientInfo.fullName}</p>
        <ClientNameModal />

        {/* <ClientInfoModal /> */}
        <Button
          variant="link"
          className="-mt-2 flex flex-row gap-1 p-0 font-normal"
          onClick={removeClientInfo}
        >
          <Trash2 className="text-primary h-4 w-4" />
          Remove client
        </Button>
      </div>
      <div className="flex flex-col gap-7">
        <div>
          <p className="text-sm text-gray-500">Date of issue</p>
          <div className="flex flex-row items-center gap-1">
            <p>
              {clientInfo.dateOfIssue
                ? format(clientInfo.dateOfIssue, 'yyyy/MM/dd')
                : 'Select Date'}
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="link"
                  className="flex flex-row gap-1 p-0 font-normal"
                >
                  <CalendarDays className="text-primary h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={clientInfo.dateOfIssue ?? new Date()}
                  onSelect={(val) => {
                    if (val) {
                      setClientInfo({
                        dateOfIssue: val,
                      });
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500">Due Date</p>
          <div className="flex flex-row items-center gap-1">
            <p>
              {clientInfo.dueDate
                ? format(clientInfo.dueDate, 'yyyy/MM/dd')
                : 'Select Date'}
            </p>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="link"
                  className="flex flex-row gap-1 p-0 font-normal"
                >
                  <CalendarDays className="text-primary h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={clientInfo.dueDate ?? new Date()}
                  onSelect={(val) => {
                    if (val) {
                      setClientInfo({
                        dueDate: val,
                      });
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">Invoice Number</p>
        <p>0000273</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Amount Due (MAD)</p>
        <p className="text-xl">1,2238 DHS</p>
      </div>
    </div>
  );
};

export default ClientInfo;
