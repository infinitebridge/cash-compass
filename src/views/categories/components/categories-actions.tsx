import { Button } from '@finbridge-manager-apps/ui';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { useNewCategory } from '../hooks/use-new-category';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CategoryActions() {
  const { onOpen } = useNewCategory();

  function openCategoryFormSheet() {
    onOpen();
  }

  return (
    <div className="inline-flex rounded-md shadow-sm">
      <Button
        type="button"
        size={'sm'}
        className="relative inline-flex items-center rounded-br-none rounded-tr-none focus:z-10"
      >
        New Category
      </Button>
      <Menu as="div" className="relative -ml-px block">
        <MenuButton className="bg-primary relative inline-flex h-full items-center rounded-r-md px-2 text-white ring-1 ring-inset focus:z-10">
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 -mr-1 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <button
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                  onClick={() => openCategoryFormSheet()}
                >
                  New Income
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
                  onClick={() => openCategoryFormSheet()}
                >
                  New Expense
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
