import { Badge } from '@cash-compass/ui/badge';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

export type BadgeColorScheme =
  | 'blue'
  | 'green'
  | 'yellow'
  | 'red'
  | 'gray'
  | 'purple'
  | 'orange'
  | 'pink';

export const colorSchemes = {
  blue: 'bg-blue-50 text-blue-700 border-blue-200',
  green: 'bg-green-50 text-green-700 border-green-200',
  yellow: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  red: 'bg-red-50 text-red-700 border-red-200',
  gray: 'bg-gray-50 text-gray-700 border-gray-200',
  purple: 'bg-purple-50 text-purple-700 border-purple-200',
  orange: 'bg-orange-50 text-orange-700 border-orange-200',
  pink: 'bg-pink-50 text-pink-700 border-pink-200',
} as const;

interface GenericBadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  colorScheme?: BadgeColorScheme;
  icon?: LucideIcon;
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function GenericBadge({
  children,
  variant = 'outline',
  colorScheme,
  icon: Icon,
  className,
  showIcon = true,
  size = 'md',
}: GenericBadgeProps) {
  const sizeClasses = {
    sm: 'py-0.5 px-1.5 text-xs [&>svg]:size-3',
    md: 'py-1 px-2 text-sm [&>svg]:size-3.5',
    lg: 'py-1.5 px-2.5 text-base [&>svg]:size-4',
  };

  return (
    <Badge
      variant={variant}
      className={clsx(
        'flex items-center gap-1',
        sizeClasses[size],
        colorScheme && colorSchemes[colorScheme],
        className
      )}
    >
      {showIcon && Icon && <Icon className="shrink-0" />}
      {children}
    </Badge>
  );
}
