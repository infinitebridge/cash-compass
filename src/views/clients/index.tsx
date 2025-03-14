import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@finbridge-manager-apps/ui';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { companyColumns, peopleColumns } from './components/columns';
import { DataTable } from './components/data-table';
import { useGetCompanies } from './hooks/use-get-companies';
import { useGetPeople } from './hooks/use-get-people';

const ClientsPage = () => {
  const [searchParams] = useSearchParams();
  const clientType = searchParams.get('client') ?? 'companies';
  const { companies, companiesLoading } = useGetCompanies();
  const { people, peopleLoading } = useGetPeople();

  if (peopleLoading || companiesLoading) {
    return (
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <Card className="border-none drop-shadow-sm">
          <CardHeader>
            <Skeleton className="h-8 w-48" />
          </CardHeader>
          <CardContent>
            <div className="flex h-[500px] w-full items-center justify-center">
              <Loader2 className="size-6 animate-spin text-slate-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
        <Card className="border-none drop-shadow-sm">
          <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
            <CardTitle className="line-clamp-1 text-xl">Clients page</CardTitle>
          </CardHeader>
          <CardContent>
            {clientType === 'companies' ? (
              <DataTable
                filterKey="name"
                columns={companyColumns}
                data={companies?.slice(0) ?? []}
              />
            ) : (
              <DataTable
                filterKey="email"
                columns={peopleColumns}
                data={people?.slice(0) ?? []}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientsPage;
