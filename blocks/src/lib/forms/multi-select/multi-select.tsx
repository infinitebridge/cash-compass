'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import { Badge } from '@cash-compass/ui/badge';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@cash-compass/ui/command';
import { Command as CommandPrimitive } from 'cmdk';

export type MultiSelectOption = {
  value: string;
  label: string;
};

type Props<T extends MultiSelectOption> = {
  options: T[];
  value?: T[];
  defaultValue?: T[];
  onChange?: (selected: T[]) => void;
  placeholder?: string;
  renderOption?: (option: T) => React.ReactNode;
  renderBadge?: (option: T, onRemove: () => void) => React.ReactNode;
};

export function FancyMultiSelect<T extends MultiSelectOption>({
  options,
  value,
  defaultValue = [],
  onChange,
  placeholder = 'Select options...',
  renderOption,
  renderBadge,
}: Props<T>) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const isControlled = value !== undefined;
  const [internalSelected, setInternalSelected] =
    React.useState<T[]>(defaultValue);

  const selected = isControlled ? value : internalSelected;
  const setSelected = React.useCallback(
    (next: T[] | ((prev: T[]) => T[])) => {
      const nextValue = typeof next === 'function' ? next(selected) : next;
      if (!isControlled) setInternalSelected(nextValue);
      onChange?.(nextValue);
    },
    [isControlled, onChange, selected]
  );

  const handleUnselect = React.useCallback(
    (option: T) => {
      setSelected((prev) => prev.filter((s) => s.value !== option.value));
    },
    [setSelected]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) return;

      if ((e.key === 'Delete' || e.key === 'Backspace') && input.value === '') {
        setSelected((prev) => prev.slice(0, -1));
      }

      if (e.key === 'Escape') {
        input.blur();
      }
    },
    [setSelected]
  );

  const selectables = options.filter(
    (option) => !selected.find((sel) => sel.value === option.value)
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((option) =>
            renderBadge ? (
              <React.Fragment key={option.value}>
                {renderBadge(option, () => handleUnselect(option))}
              </React.Fragment>
            ) : (
              <Badge key={option.value} variant="secondary">
                {option.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={() => handleUnselect(option)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            )
          )}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 && (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup>
                {selectables.map((option) => (
                  <CommandItem
                    key={option.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue('');
                      setSelected((prev) => [...prev, option]);
                    }}
                    className="cursor-pointer"
                  >
                    {renderOption ? renderOption(option) : option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          )}
        </CommandList>
      </div>
    </Command>
  );
}
