'use client';

import { CalendarDays } from 'lucide-react';

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@finbridge-manager-apps/ui';
import useClientInfoStore from '../../../zustand/client-store';

export function DatePicker() {
  const { setClientInfo } = useClientInfoStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'link'}
          className="flex flex-row gap-1 p-0 font-normal"
        >
          <CalendarDays className="text-primary h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          onSelect={(val) => {
            setClientInfo({
              dueDate: val,
              dateOfIssue: val,
            });
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
