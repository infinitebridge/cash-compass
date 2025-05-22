import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
  CheckCircle2,
  Send,
  CircleDashed,
  Clock,
  CircleCheck,
  CircleX as Rejected,
  CircleAlert,
  CircleIcon,
  CircleMinus,
} from 'lucide-react';
import { TransactionStatus } from '../../types';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(
  date: Date | string | number,
  opts: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat('en-US', {
    month: opts.month ?? 'long',
    day: opts.day ?? 'numeric',
    year: opts.year ?? 'numeric',
    ...opts,
  }).format(new Date(date));
}

export function toSentenceCase(str: string) {
  return str
    .replace(/_/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * @see https://github.com/radix-ui/primitives/blob/main/packages/core/primitive/src/primitive.tsx
 */
export function composeEventHandlers<E>(
  originalEventHandler?: (event: E) => void,
  ourEventHandler?: (event: E) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E) {
    originalEventHandler?.(event);

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event).defaultPrevented
    ) {
      return ourEventHandler?.(event);
    }
  };
}

/**
 * Returns the appropriate status icon based on the provided status.
 * @param status - The status of the invoice.
 * @returns A React component representing the status icon.
 */
export function getStatusIcon(status: TransactionStatus) {
  const statusIcons = {
    // Existing status mappings
    paid: CheckCircle2,
    sent: Send,
    overdue: CircleAlert,
    draft: CircleDashed,

    // New status mappings
    invoiced: Send,
    approved: CircleCheck,
    pending: Clock,
    rejected: Rejected,
    expected: CircleMinus,
    received: CheckCircle2,
  };

  return statusIcons[status] || CircleIcon;
}
