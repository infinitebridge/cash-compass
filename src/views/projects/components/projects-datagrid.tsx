'use client';
'use memo';

import * as React from 'react';

import { useDataTable } from '../hooks/use-data-table';
import { DataTable } from './data-table/data-table';
import { DataTableToolbar } from './data-table/data-table-toolbar';

import { useSearchParams } from 'react-router-dom';

import { useGetProjectAggregateQuery } from '../../../graphql';
import { useGetPeople } from '../../clients/hooks/use-get-people';
import { getColumns } from './tasks-table-columns';
import { TasksTableFloatingBar } from './tasks-table-floating-bar';
import { useTasksTable } from './tasks-table-provider';
import { TasksTableToolbarActions } from './tasks-table-toolbar-actions';
import { Project, type DataTableFilterField } from './types';

interface ProjectDataGridProps {
  count: number;
  data: Project[];
}
export function ProjectsDataGrid({
  count,
  data,
}: Readonly<ProjectDataGridProps>) {
  // Feature flags for showcasing some additional features. Feel free to remove them.
  const { featureFlags } = useTasksTable();

  const [params] = useSearchParams();
  const per_page = params.get('per_page');
  const { people } = useGetPeople();
  const { data: flateRateProjectsAggreagate } = useGetProjectAggregateQuery({
    variables: {
      where: {
        type: {
          _eq: 'FLAT_RATE',
        },
      },
    },
  });

  const { data: hourlyProjectsAggregate } = useGetProjectAggregateQuery({
    variables: {
      where: {
        type: {
          _eq: 'PER_HOUR',
        },
      },
    },
  });

  const pageCount = React.useMemo(
    () => Math.ceil(count / (per_page ? ~~per_page : 1)),
    [count, per_page]
  );

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), []);

  /**
   * This component can render either a faceted filter or a search filter based on the `options` prop.
   *
   * @prop options - An array of objects, each representing a filter option. If provided, a faceted filter is rendered. If not, a search filter is rendered.
   *
   * Each `option` object has the following properties:
   * @prop {string} label - The label for the filter option.
   * @prop {string} value - The value for the filter option.
   * @prop {React.ReactNode} [icon] - An optional icon to display next to the label.
   * @prop {boolean} [withCount] - An optional boolean to display the count of the filter option.
   */
  const filterFields: DataTableFilterField<Project>[] = [
    {
      label: 'client',
      value: 'client',
      options:
        people?.map((person) => {
          return {
            value: `${person.id}`,
            label: `${person.first_name} ${person.last_name}`,
            count: person.projects_aggregate.aggregate?.count,
          };
        }) ?? [],
    },
    {
      label: 'type',
      value: 'type',
      options: [
        {
          value: 'FLAT_RATE',
          label: 'Flat rate',
          count:
            flateRateProjectsAggreagate?.project_aggregate.aggregate?.count,
        },
        {
          value: 'PER_HOUR',
          label: 'Hourly',
          count: hourlyProjectsAggregate?.project_aggregate.aggregate?.count,
        },
      ],
    },
  ];

  const { table } = useDataTable({
    data,
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: featureFlags.includes('advancedFilter'),
    defaultPerPage: per_page ? ~~per_page : 10,
    defaultSort: 'date.desc',
  });

  return (
    <DataTable
      table={table}
      floatingBar={
        featureFlags.includes('floatingBar') ? (
          <TasksTableFloatingBar table={table} />
        ) : null
      }
    >
      {/* {featureFlags.includes('advancedFilter') ? (
        <DataTableAdvancedToolbar table={table} filterFields={filterFields}>
          <TasksTableToolbarActions table={table} />
        </DataTableAdvancedToolbar>
      ) : ( */}
      <DataTableToolbar table={table} filterFields={filterFields}>
        <TasksTableToolbarActions table={table} />
      </DataTableToolbar>
      {/* )} */}
    </DataTable>
  );
}
