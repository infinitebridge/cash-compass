import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from '@finbridge-manager-apps/ui';
import { Pencil, PlusIcon, TrashIcon } from 'lucide-react';
import { useState } from 'react';
import CountryDropdown from '../countries';

export function ClientInfoModal() {
  const [showBusinessPhoneField, setShowBusinessPhoneField] = useState(false);
  const [showAddressField, setShowAddressPhoneField] = useState(false);

  function handlePhoneBusinessFieldToggle() {
    setShowBusinessPhoneField((prev) => !prev);
  }
  function handleAddressFieldToggle() {
    setShowAddressPhoneField((prev) => !prev);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'link'}
          className="flex flex-row gap-1 p-0 font-normal"
        >
          <Pencil className="text-primary h-4 w-4" />
          Edit client information
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Client Information</DialogTitle>
          <DialogDescription>
            Either First and Last Name or Company Name is required to save this
            Client.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex w-full flex-row items-center gap-3">
            <div className="w-full space-y-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input id="first_name" defaultValue="Pedro Duarte" />
            </div>
            <div className="w-full space-y-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input id="last_name" defaultValue="Pedro Duarte" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company_name">Company Name</Label>
            <Input id="company_name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail address</Label>
            <Input id="email" placeholder="Address Line 1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input id="phone_number" placeholder="Postal Code" />
          </div>
          <div className="space-y-2">
            <Label htmlFor={`phone_number`}>Phone Number</Label>
            <Input id={`phone_number`} placeholder="Phone Number" />
          </div>
          {showBusinessPhoneField === true ? (
            <div className="space-y-2">
              <Label htmlFor={`business_phone_number`}>
                Business Phone Number
              </Label>
              <Input
                id={`business_phone_number`}
                placeholder="Business Phone Number"
              />
            </div>
          ) : null}

          <Button
            variant={'link'}
            className="flex flex-row justify-start gap-1 p-0 text-left font-normal"
            onClick={handlePhoneBusinessFieldToggle}
          >
            {showBusinessPhoneField === false ? (
              <>
                <PlusIcon className="text-primary h-6 w-6" />
                <span> Add Business Phone Number</span>
              </>
            ) : (
              <>
                <TrashIcon className="text-primary h-4 w-4" />
                <span> Remove Business Phone Number</span>
              </>
            )}
          </Button>
          <div className="h-0.5 w-full bg-gray-300" />
          {showAddressField === true ? (
            <>
              <div className="space-y-2">
                <Label htmlFor={`business_phone_number`}>Country</Label>
                <CountryDropdown
                  getValue={() => {
                    return false;
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`address`}>Address</Label>
                <Input id={`address`} placeholder="Address Line 1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`postal_code`}>Postal Code</Label>
                <Input id={`postal_code`} placeholder="Postal Code" />
              </div>
            </>
          ) : null}

          <Button
            variant={'link'}
            className="flex flex-row justify-start gap-1 p-0 text-left font-normal"
            onClick={handleAddressFieldToggle}
          >
            {showAddressField === false ? (
              <>
                <PlusIcon className="text-primary h-6 w-6" />
                <span> Add Address</span>
              </>
            ) : (
              <>
                <TrashIcon className="text-primary h-4 w-4" />
                <span> Remove Address</span>
              </>
            )}
          </Button>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
