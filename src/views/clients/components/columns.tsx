import {
  Avatar,
  AvatarFallback,
  Checkbox,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@finbridge-manager-apps/ui';
import { ColumnDef } from '@tanstack/react-table';
import { format, parseISO } from 'date-fns';
import PeopleActions from './people-actions';
import TableActions from './table-actions';

export const companyColumns: ColumnDef<unknown>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'business_phone',
    header: 'Business Phone',
  },
  {
    accessorKey: 'people',
    header: 'People',
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const people = row?.original.people;
      return (
        <div className="flex flex-row items-center">
          {people.map(
            (person: { id: number; first_name: string; last_name: string }) => (
              <TooltipProvider key={person.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar className="bg-primary -mr-2">
                      <AvatarFallback>
                        {person.first_name.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {person.first_name} {person.last_name}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          )}
        </div>
      );
    },
  },
  {
    accessorKey: 'country',
    header: 'Country',
  },
  // {
  //   accessorKey: 'oustanding',
  //   header: 'Outstanding',
  //   cell: ({ row }) => {
  //     return (
  //       <span className="rounded-full border px-3 py-1">
  //         {row.getValue('oustanding')}
  //       </span>
  //     );
  //   },
  // },
  {
    accessorKey: 'created_at',
    header: 'Date',
    cell: ({ row }) => {
      const date = row.getValue('created_at') as string;
      const createdAt = parseISO(date ?? '2024-07-10T17:04:49.335656');
      const formattedDate = format(createdAt, 'dd MMMM yyyy');
      return <span>{formattedDate}</span>;
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const id = row.original.id;

      return <TableActions id={id} />;
    },
  },
];

export const peopleColumns: ColumnDef<unknown>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'first_name',
    header: 'Name',
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const lastName = row.original.last_name;
      const firstName = row.getValue('first_name');
      return (
        <p>
          {firstName} {lastName}
        </p>
      );
    },
  },

  {
    accessorKey: 'company',
    header: 'Company',
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const companyName = row.getValue('company').name;
      return <p>{companyName}</p>;
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const id = row.original.id;
      return <PeopleActions id={id} />;
    },
  },
];
