'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@finbridge-manager-apps/ui';
import { Radio, RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { GetTaxByBusinessIdQuery } from '../../../graphql';
import { useTaxStore } from '../../../zustand/tax-store';
import { useGetTaxes } from '../hooks/useGetTaxes';
import NewTaxModal from './NewTaxModal';

type Tax = NonNullable<GetTaxByBusinessIdQuery['tax']>;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function TaxesList() {
  const { taxes } = useGetTaxes();
  const [editingTax, setEditingTax] = useState<string | null>(null);
  const [newTaxName, setNewTaxName] = useState('');
  const { setTax, onOpen } = useTaxStore();
  // State to hold the selected tax
  const [selectedTax, setSelectedTax] = useState<Tax | null>(null);

  // Effect to set the selected tax based on default value
  useEffect(() => {
    if (taxes) {
      const defaultTax = taxes.find((t) => t.default);
      setSelectedTax(defaultTax || null);
    }
  }, [taxes]);

  const handleDoubleClick = (taxName: string) => {
    setEditingTax(taxName);
    setNewTaxName(taxName);
  };

  const handleTaxNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaxName(e.target.value);
  };

  const handleBlur = (taxIdx: number) => {
    const updatedTaxes = [...(taxes || [])];
    updatedTaxes[taxIdx].name = newTaxName;
    setEditingTax(null);
  };

  // When the user selects a different tax, update the "default" flag
  const handleTaxSelection = (selected: Tax) => {
    setSelectedTax(selected);

    // Update default flags for all taxes
    const updatedTaxes = taxes?.map((tax) => ({
      ...tax,
      default: tax.name === selected?.at(0)?.name,
    }));

    return updatedTaxes;
    // Optionally, send a request to update taxes in backend
  };

  return (
    <>
      <fieldset aria-label="Tax Selection" className="z-0 cursor-pointer">
        <RadioGroup
          value={selectedTax}
          onChange={handleTaxSelection}
          className="-space-y-px rounded-md bg-white"
        >
          {taxes?.map((tax, taxIdx) => (
            <div key={tax.name} className="flex items-center justify-between">
              <Radio
                value={tax}
                aria-label={tax.name}
                checked={selectedTax?.default === true}
                className={classNames(
                  taxIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                  taxIdx === (taxes.length || 0) - 1
                    ? 'rounded-bl-md rounded-br-md'
                    : '',
                  'group relative flex w-full cursor-pointer justify-between border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50'
                )}
              >
                <div className="flex flex-row items-center">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <span className="ml-3 flex flex-col">
                    {editingTax === tax.name ? (
                      <input
                        value={newTaxName}
                        onChange={handleTaxNameChange}
                        onBlur={() => handleBlur(taxIdx)}
                        autoFocus
                        className="block border-b border-indigo-500 text-sm font-medium text-gray-900 focus:outline-none"
                      />
                    ) : (
                      <span
                        className="block text-sm font-medium text-gray-900 group-data-[checked]:text-indigo-900"
                        onDoubleClick={() => handleDoubleClick(tax.name)}
                      >
                        {tax.name}
                      </span>
                    )}

                    <span className="block text-sm text-gray-500 group-data-[checked]:text-indigo-700">
                      Rate: {tax.amount}%
                    </span>
                  </span>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <button
                      type="button"
                      className="inline-flex items-center p-2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-32">
                    <DropdownMenuItem
                      onClick={() => {
                        setTax(tax);
                        onOpen();
                      }}
                    >
                      Edit
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </Radio>
            </div>
          ))}
        </RadioGroup>
      </fieldset>
      <NewTaxModal />
    </>
  );
}
