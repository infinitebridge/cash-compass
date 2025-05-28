import type { Filter, JoinOperator } from '../../types';
import { endOfDay, startOfDay } from 'date-fns';

/**
 * Generate filter conditions for a React app.
 *
 * @param filters - An array of filters to be applied
 * @param joinOperator - The join operator to use for combining the filters ('and' or 'or')
 * @returns A function that can be used to filter an array of items
 */
export function filterColumns<T extends Record<string, any>>({
  filters,
  joinOperator,
}: {
  filters: Filter<T>[];
  joinOperator: JoinOperator;
}) {
  return (item: T) => {
    const results = filters.map((filter) => {
      const value = item[filter.id];

      switch (filter.operator) {
        case 'eq':
          if (Array.isArray(filter.value)) {
            return filter.value.includes(value);
          }
          if (typeof value === 'boolean' && typeof filter.value === 'string') {
            return value === (filter.value === 'true');
          }
          if (filter.type === 'date') {
            const date = new Date(filter.value);
            const itemDate = new Date(value);
            const start = startOfDay(date);
            const end = endOfDay(date);
            return itemDate >= start && itemDate <= end;
          }
          return value === filter.value;

        case 'ne':
          if (Array.isArray(filter.value)) {
            return !filter.value.includes(value);
          }
          if (typeof value === 'boolean' && typeof filter.value === 'string') {
            return value !== (filter.value === 'true');
          }
          return value !== filter.value;

        case 'iLike':
          return filter.type === 'text' && typeof filter.value === 'string'
            ? value.toLowerCase().includes(filter.value.toLowerCase())
            : false;

        case 'notILike':
          return filter.type === 'text' && typeof filter.value === 'string'
            ? !value.toLowerCase().includes(filter.value.toLowerCase())
            : false;

        case 'isEmpty':
          return value === null || value === undefined || value === '';

        case 'isNotEmpty':
          return value !== null && value !== undefined && value !== '';

        default:
          return true;
      }
    });

    return joinOperator === 'and'
      ? results.every(Boolean)
      : results.some(Boolean);
  };
}
