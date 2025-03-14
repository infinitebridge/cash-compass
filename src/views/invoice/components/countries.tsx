/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */

import { Check, ChevronsUpDown } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                             Internal Dependency                            */
/* -------------------------------------------------------------------------- */

import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  ScrollBar,
} from '@finbridge-manager-apps/ui';

import { countries } from '../../../data/countries';
import { useDropdownStore } from '../../../hooks/use-dropdown-store';
import { cn, lowerCase } from '../../../lib/utils';

interface CountryDropdownProps {
  disabled?: boolean;
  getValue: (value: string) => void;
}

const CountryDropdown = ({ disabled, getValue }: CountryDropdownProps) => {
  const {
    countryValue,
    setCountryValue,
    openCountryDropdown,
    setOpenCountryDropdown,
  } = useDropdownStore();

  return (
    <Popover
      modal
      open={openCountryDropdown}
      onOpenChange={setOpenCountryDropdown}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={openCountryDropdown}
          className="w-full justify-between rounded-[6px] border"
          disabled={disabled}
        >
          <span>
            {countryValue ? (
              <div className="flex items-end gap-2">
                <span>
                  {
                    countries.find(
                      (country) => lowerCase(country.name) === countryValue
                    )?.emoji
                  }
                </span>
                <span>
                  {
                    countries.find(
                      (country) => lowerCase(country.name) === countryValue
                    )?.name
                  }
                </span>
              </div>
            ) : (
              <span>Select Country...</span>
            )}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[340px] rounded-[6px] border p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-[300px] w-full overflow-auto">
              <CommandList className="w-full">
                {countries?.map((country) => (
                  <CommandItem
                    key={country.id}
                    value={country.name}
                    onSelect={() => {
                      const currentValue = lowerCase(country.name);
                      setCountryValue(currentValue);
                      getValue(currentValue);
                      setOpenCountryDropdown(false);
                    }}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="ml-3 flex items-center gap-2 text-black">
                      <img
                        src={`/flags/${country.iso2.toLowerCase()}.svg`}
                        className="h-3 w-4"
                        aria-labelledby={country.name}
                        title={country.name}
                        alt={country.name}
                      />
                      {country.name}
                    </div>
                    <Check
                      className={cn(
                        'mr-2 size-4',
                        countryValue === lowerCase(country.name)
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandList>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CountryDropdown;
