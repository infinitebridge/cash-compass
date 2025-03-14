import { Button } from '@finbridge-manager-apps/ui';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { useNewProduct } from '../../products/hooks/use-new-project';
import { useNewService } from '../../services/hooks/use-new-service';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductsServicesActions() {
  const { onOpenNew } = useNewProduct();
  const { onOpenNew: onNewServceCretion } = useNewService();

  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Menu as="div" className="relative -ml-px block">
        <MenuButton className="bg-primary relative inline-flex h-full items-center rounded-md px-2 text-white ring-1 ring-inset focus:z-10">
          <Button
            size={'sm'}
            type="button"
            className="relative inline-flex items-center rounded-md pr-3 focus:z-10"
          >
            Create New
          </Button>
          <div className="mr-2 h-[50%] w-[0.1em] bg-gray-200" />
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <button
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                  onClick={onOpenNew}
                >
                  New Product
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <button
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                  onClick={onNewServceCretion}
                >
                  New Service
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
