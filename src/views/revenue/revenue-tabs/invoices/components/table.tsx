import { Task } from './types';
import type {
  DataTableAdvancedFilterField,
  DataTableFilterField,
  DataTableRowAction,
} from './types';
import * as React from 'react';
import { DataTable } from './data-table/data-table';
import { DataTableAdvancedToolbar } from './data-table/data-table-advanced-toolbar';
import { useDataTable } from './data-table/hooks/use-data-table';
import { getStatusIcon, toSentenceCase } from './data-table/lib/utils';
import { DeleteTasksDialog } from './delete-dialog';
import { getColumns } from './columns';
import { TasksTableToolbarActions } from './toolbar-actions';

export function TasksTable() {
  const data = [
    {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'Network Vulnerability Scan',
      status: 'completed',
      last_run: new Date('2024-02-17T14:30:00Z'),
      schedule: 'daily',
    },
    {
      id: '04dbc84b-6b23-4848-aba5-32d48c52dd4a',
      name: 'Malware Detection Scan',
      status: 'pending',
      last_run: new Date('2024-02-19T11:45:00Z'),
      schedule: 'weekly',
    },
    {
      id: '7d9c5a3e-8e1b-4a7c-9c21-f9db3d789aa2',
      name: 'SSL Certificate Validation',
      status: 'pending',
      last_run: new Date('2024-02-17T13:20:00Z'),
      schedule: 'monthly',
    },
    {
      id: '3b69e169-a623-4e85-a126-6472c8c90f66',
      name: 'Port Security Scan',
      status: 'canceled',
      last_run: new Date('2024-02-18T09:30:00Z'),
      schedule: 'weekly',
    },
    {
      id: '9e854aa2-f985-4678-9f2c-d2387a7f49e1',
      name: 'Database Security Audit',
      status: 'pending',
      last_run: new Date('2024-02-19T08:00:00Z'),
      schedule: 'daily',
    },
    {
      id: 'c5c4c1d9-9c2d-4c5e-a8b3-8d8f8e7f6e5d',
      name: 'Firewall Configuration Check',
      status: 'pending',
      last_run: new Date('2024-02-20T16:15:00Z'),
      schedule: 'weekly',
    },
    {
      id: 'b2b1a9c8-7f6e-5d4c-3b2a-1c0d9e8f7d6e',
      name: 'Access Control Audit',
      status: 'pending',
      last_run: new Date('2024-02-19T14:20:00Z'),
      schedule: 'monthly',
    },
    {
      id: 'a1b2c3d4-e5f6-7a8b-9c0d-ef1234567890',
      name: 'Endpoint Protection Scan',
      status: 'completed',
      last_run: new Date('2024-02-21T10:30:00Z'),
      schedule: 'weekly',
    },
    // Additional 20 items
    {
      id: 'f7e6d5c4-b3a2-1098-7654-3210fedcba98',
      name: 'User Permission Review',
      status: 'completed',
      last_run: new Date('2024-02-20T09:15:00Z'),
      schedule: 'monthly',
    },
    {
      id: '1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      name: 'Password Policy Compliance',
      status: 'pending',
      last_run: new Date('2024-02-22T13:40:00Z'),
      schedule: 'weekly',
    },
    {
      id: '9f8e7d6c-5b4a-3210-fedc-ba9876543210',
      name: 'Data Encryption Verification',
      status: 'pending',
      last_run: new Date('2024-02-18T15:30:00Z'),
      schedule: 'daily',
    },
    {
      id: '2d3e4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a',
      name: 'Cloud Resources Audit',
      status: 'completed',
      last_run: new Date('2024-02-21T11:25:00Z'),
      schedule: 'weekly',
    },
    {
      id: 'abcdef12-3456-7890-abcd-ef1234567890',
      name: 'Mobile Device Security Check',
      status: 'pending',
      last_run: new Date('2024-02-22T10:00:00Z'),
      schedule: 'daily',
    },
    {
      id: 'fedcba98-7654-3210-fedc-ba9876543210',
      name: 'Phishing Vulnerability Assessment',
      status: 'canceled',
      last_run: new Date('2024-02-19T16:45:00Z'),
      schedule: 'monthly',
    },
    {
      id: '11223344-5566-7788-99aa-bbccddeeff00',
      name: 'API Security Scan',
      status: 'pending',
      last_run: new Date('2024-02-20T08:30:00Z'),
      schedule: 'weekly',
    },
    {
      id: 'aabbccdd-eeff-0011-2233-445566778899',
      name: 'Network Traffic Analysis',
      status: 'completed',
      last_run: new Date('2024-02-21T14:15:00Z'),
      schedule: 'daily',
    },
    {
      id: '12ab34cd-56ef-78ab-90cd-ef1234abcdef',
      name: 'Software Update Verification',
      status: 'pending',
      last_run: new Date('2024-02-19T09:50:00Z'),
      schedule: 'weekly',
    },
    {
      id: '98765432-1098-7654-3210-987654321098',
      name: 'Backup System Integrity Check',
      status: 'pending',
      last_run: new Date('2024-02-22T11:35:00Z'),
      schedule: 'daily',
    },
    {
      id: 'a9b8c7d6-e5f4-3210-a9b8-c7d6e5f43210',
      name: 'Intrusion Detection System Test',
      status: 'pending',
      last_run: new Date('2024-02-20T15:20:00Z'),
      schedule: 'monthly',
    },
    {
      id: '11aabb22-33cc-44dd-55ee-ff66778899aa',
      name: 'VPN Security Assessment',
      status: 'completed',
      last_run: new Date('2024-02-21T09:10:00Z'),
      schedule: 'weekly',
    },
    {
      id: 'abcd1234-efgh-5678-ijkl-9012mnopqrst',
      name: 'Email Security Filter Check',
      status: 'pending',
      last_run: new Date('2024-02-19T13:05:00Z'),
      schedule: 'daily',
    },
    {
      id: 'zyx98765-wvu4-3210-tsrq-ponmlkjihgfe',
      name: 'Authentication System Audit',
      status: 'pending',
      last_run: new Date('2024-02-22T14:50:00Z'),
      schedule: 'monthly',
    },
    {
      id: '123abc45-67de-89fg-01hi-jklmno23pqrs',
      name: 'IoT Device Security Scan',
      status: 'canceled',
      last_run: new Date('2024-02-20T11:55:00Z'),
      schedule: 'weekly',
    },
    {
      id: 'abcxyz12-3456-7890-def4-56789uvw0123',
      name: 'Source Code Security Review',
      status: 'pending',
      last_run: new Date('2024-02-19T10:40:00Z'),
      schedule: 'monthly',
    },
    {
      id: '11335577-9911-2244-6688-0022446688aa',
      name: 'Database Backup Verification',
      status: 'completed',
      last_run: new Date('2024-02-21T12:30:00Z'),
      schedule: 'daily',
    },
    {
      id: '99887766-5544-3322-1100-ffeeddccbbaa',
      name: 'Server Hardening Verification',
      status: 'pending',
      last_run: new Date('2024-02-20T14:00:00Z'),
      schedule: 'weekly',
    },
    {
      id: 'a1s2d3f4-g5h6-j7k8-l9p0-q1w2e3r4t5y6',
      name: 'Third-Party Integration Security Audit',
      status: 'pending',
      last_run: new Date('2024-02-22T09:25:00Z'),
      schedule: 'monthly',
    },
    {
      id: 'z9x8c7v6-b5n4-m3k2-j1h0-g9f8e7d6c5b4',
      name: 'Compliance Documentation Review',
      status: 'completed',
      last_run: new Date('2024-02-21T15:45:00Z'),
      schedule: 'weekly',
    },
  ] as Task[];
  const pageCount = data.length;
  const statusCounts = 10;

  const [rowAction, setRowAction] =
    React.useState<DataTableRowAction<Task> | null>(null);

  const columns = React.useMemo(() => getColumns({ setRowAction }), []);

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
  const filterFields: DataTableFilterField<Task>[] = [
    {
      id: 'name',
      label: 'Name',
      placeholder: 'Filter Scans...',
    },
    {
      id: 'status',
      label: 'Status',
      options: (['completed', 'pending', 'canceled'] as Task['status'][]).map(
        (status) => ({
          label: toSentenceCase(status),
          value: status,
          icon: getStatusIcon(status),
          count: statusCounts,
        })
      ),
    },
    // {
    //   id: "priority",
    //   label: "Priority",
    //   options: tasks.priority.enumValues.map((priority) => ({
    //     label: toSentenceCase(priority),
    //     value: priority,
    //     icon: getPriorityIcon(priority),
    //     count: priorityCounts[priority],
    //   })),
    // },
  ];

  /**
   * Advanced filter fields for the data table.
   * These fields provide more complex filtering options compared to the regular filterFields.
   *
   * Key differences from regular filterFields:
   * 1. More field types: Includes 'text', 'multi-select', 'date', and 'boolean'.
   * 2. Enhanced flexibility: Allows for more precise and varied filtering options.
   * 3. Used with DataTableAdvancedToolbar: Enables a more sophisticated filtering UI.
   * 4. Date and boolean types: Adds support for filtering by date ranges and boolean values.
   */
  const advancedFilterFields: DataTableAdvancedFilterField<Task>[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      id: 'status',
      label: 'Status',
      type: 'multi-select',
      options: (['completed', 'pending', 'canceled'] as Task['status'][]).map(
        (status) => ({
          label: toSentenceCase(status),
          value: status,
          icon: getStatusIcon(status),
          count: statusCounts,
        })
      ),
    },

    {
      id: 'last_run',
      label: 'Last Run',
      type: 'date',
    },
  ];

  const { table } = useDataTable({
    data: data.slice(0, 10),
    columns,
    pageCount,
    filterFields,
    enableAdvancedFilter: true,
    initialState: {
      sorting: [{ id: 'last_run', desc: true }],
      columnPinning: { right: ['actions'] },
    },
    getRowId: (originalRow) => originalRow.id,
    shallow: false,
    clearOnDefault: true,
  });

  return (
    <>
      <DataTable table={table} floatingBar={null}>
        <DataTableAdvancedToolbar
          table={table}
          filterFields={advancedFilterFields}
          shallow={false}
        >
          <TasksTableToolbarActions table={table} />
        </DataTableAdvancedToolbar>
      </DataTable>

      <DeleteTasksDialog
        open={rowAction?.type === 'delete'}
        onOpenChange={() => setRowAction(null)}
        tasks={rowAction?.row.original ? [rowAction?.row.original] : []}
        showTrigger={false}
        onSuccess={() => rowAction?.row.toggleSelected(false)}
      />
    </>
  );
}
