// components/GenericSheet.tsx
'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@cash-compass/ui/sheet';
import { Button } from '@cash-compass/ui/button';
import { Input } from '@cash-compass/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cash-compass/ui/select';
import { Label } from '@cash-compass/ui/label';

interface GenericSheetProps<T> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: T | null;
  title?: string;
  renderContent?: (data: T) => React.ReactNode;
  footerActions?: React.ReactNode;
  className?: string;
}

export function GenericSheet<T>({
  isOpen,
  onOpenChange,
  data,
  title = 'Details',
  renderContent,
  footerActions,
  className = '',
}: GenericSheetProps<T>) {
  // Default form-like content (similar to the image)
  const defaultRenderContent = (data: T) => (
    <div className="space-y-6">
      {/* Placeholder for a chart or visual */}
      <div className="h-32 bg-gray-800 rounded-md flex items-center justify-center">
        <p className="text-gray-400">Chart Placeholder</p>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm text-gray-400">Trending up by 5.2% this month</p>
        <p className="text-sm text-gray-400">
          Showing total visitors for the last 6 months. This is just some random
          text to test the layout. It spans multiple lines and should show the
          wrap.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <Label htmlFor="header">Header</Label>
          <Input id="header" defaultValue="Cover page" className="mt-1" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="type">Type</Label>
            <Select defaultValue="cover-page">
              <SelectTrigger id="type" className="mt-1">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cover-page">Cover Page</SelectItem>
                <SelectItem value="data-page">Data Page</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="status">Status</Label>
            <Select defaultValue="active">
              <SelectTrigger id="status" className="mt-1">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="target">Target</Label>
            <Input
              id="target"
              type="number"
              defaultValue={18}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="limit">Limit</Label>
            <Input id="limit" type="number" defaultValue={5} className="mt-1" />
          </div>
        </div>

        <div>
          <Label htmlFor="reviewer">Reviewer</Label>
          <Select defaultValue="eddie-lake">
            <SelectTrigger id="reviewer" className="mt-1">
              <SelectValue placeholder="Select reviewer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eddie-lake">Eddie Lake</SelectItem>
              <SelectItem value="jane-doe">Jane Doe</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );

  // Default footer actions
  const defaultFooterActions = (
    <>
      <Button type="submit" className="w-full">
        Submit
      </Button>
      <SheetClose asChild>
        <Button variant="outline" className="w-full mt-2">
          Done
        </Button>
      </SheetClose>
    </>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className={`w-[425px] sm:w-[425px] p-6 ${className}`}
      >
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          {data ? (
            renderContent ? (
              renderContent(data)
            ) : (
              defaultRenderContent(data)
            )
          ) : (
            <p>No data selected</p>
          )}
        </div>
        <SheetFooter className="mt-6">
          {footerActions || defaultFooterActions}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
