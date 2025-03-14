import {
  Button,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@finbridge-manager-apps/ui';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { ExternalLinkIcon } from 'lucide-react';
import { GetCompanyByPkQuery } from '../../../../graphql';

type Person = {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
};

type Props = {
  people: GetCompanyByPkQuery['company_by_pk']['people'];
  loading: boolean;
};

export function ContactsTable({ people, loading }: Props) {
  if (loading) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-6 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-40" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-6 w-32" />
              </TableCell>
              <TableCell className="space-x-2 text-right">
                <Skeleton className="inline-block h-10 w-10" />
                <Skeleton className="inline-block h-10 w-10" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((person) => (
          <TableRow key={person.id}>
            <TableCell className="font-medium">
              {person.first_name} {person.last_name}
            </TableCell>
            <TableCell>{person.email}</TableCell>
            <TableCell>{person.phone}</TableCell>
            <TableCell className="space-x-2 text-right">
              <Button variant={'outline'}>
                <EnvelopeClosedIcon className="h-4 w-4" />
              </Button>
              <Button variant={'outline'}>
                <ExternalLinkIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
