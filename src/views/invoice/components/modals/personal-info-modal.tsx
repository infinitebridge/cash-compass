import {
  Button,
  Checkbox,
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
import { Pencil } from 'lucide-react';
import CountryDropdown from '../../../invoice/components/countries';

export function PersonalInfoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'link'}
          className="flex flex-row gap-1 p-0 font-normal"
        >
          <Pencil className="text-primary h-4 w-4" />
          Edit Business Information
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle> Edit Business Information</DialogTitle>
          <DialogDescription>
            Changes to your Business information are saved to your Business
            Profile. Showing or hiding information only applies to new Invoices.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Business Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" defaultValue="@peduarte" />
            <div className="mt-2 flex items-center space-x-2">
              <Checkbox id="show" />
              <Label htmlFor="show" className="font-normal">
                Show phone number{' '}
              </Label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>

            <CountryDropdown
              getValue={() => {
                return false;
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address 1</Label>
            <Input id="address" placeholder="Address Line 1" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postal_code">Postal Code</Label>
            <Input id="postal_code" placeholder="Postal Code" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
