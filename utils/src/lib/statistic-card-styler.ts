import { FileText, Calendar, AlertCircle, AlertTriangle } from 'lucide-react';

// Define your card presets
export const cardPresets = {
  default: {
    bgColor: 'bg-white',
    borderColor: 'border-gray-200',
    titleClassName: 'text-sm text-gray-600 font-medium',
    valueClassName: 'text-xl text-gray-900 font-bold',
    subtitleClassName: 'text-sm text-gray-600',
  },
  primary: {
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    titleClassName:
      'text-xs text-indigo-500 font-semibold uppercase tracking-wider',
    valueClassName: 'text-2xl text-indigo-700 font-extrabold',
    subtitleClassName: 'text-xs text-indigo-400',
    iconClassName: 'text-indigo-500',
  },
  success: {
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    titleClassName:
      'text-xs text-emerald-500 font-semibold uppercase tracking-wider',
    valueClassName: 'text-2xl text-emerald-700 font-extrabold',
    subtitleClassName: 'text-xs text-emerald-400',
    iconClassName: 'text-emerald-500',
  },
  warning: {
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    titleClassName:
      'text-xs text-amber-500 font-semibold uppercase tracking-wider',
    valueClassName: 'text-2xl text-amber-700 font-extrabold',
    subtitleClassName: 'text-xs text-amber-400',
    iconClassName: 'text-amber-500',
  },
  danger: {
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    titleClassName: 'text-sm text-red-500 font-medium',
    valueClassName: 'text-2xl text-red-600 font-bold',
    subtitleClassName: 'text-sm text-red-400',
    iconClassName: 'text-red-500',
  },
  // Receivables cards
  receivablesTotal: {
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    titleClassName: 'text-sm text-gray-600 font-medium',
    valueClassName: 'text-xl text-gray-900 font-bold',
    subtitleClassName: 'text-sm text-gray-600',
    icon: FileText,
    iconClassName: 'text-gray-700',
  },
  receivablesCurrent: {
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    titleClassName: 'text-sm text-gray-600 font-medium',
    valueClassName: 'text-xl text-blue-700 font-bold',
    subtitleClassName: 'text-sm text-gray-600',
    icon: Calendar,
    iconClassName: 'text-blue-700',
  },
  receivablesWarning: {
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    titleClassName: 'text-sm text-gray-600 font-medium',
    valueClassName: 'text-xl text-yellow-700 font-bold',
    subtitleClassName: 'text-sm text-gray-600',
    icon: AlertCircle,
    iconClassName: 'text-yellow-700',
  },
  receivablesOverdue: {
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    titleClassName: 'text-sm text-gray-600 font-medium',
    valueClassName: 'text-xl text-red-700 font-bold',
    subtitleClassName: 'text-sm text-gray-600',
    icon: AlertTriangle,
    iconClassName: 'text-red-700',
  },
};

// Create a helper function that merges the preset with custom props
export function createCardStyle(
  preset: keyof typeof cardPresets = 'default',
  customProps = {}
) {
  return {
    ...cardPresets[preset],
    ...customProps,
  };
}
