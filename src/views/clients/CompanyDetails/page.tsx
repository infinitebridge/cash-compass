import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';
import {
  Activity,
  CreditCard,
  DollarSign,
  FileText,
  Users,
  Users2Icon,
} from 'lucide-react';
import { useParams, useSearchParams } from 'react-router-dom';
import { DataCardLoading } from '../../../components/data-card';
import { useGetCompanyByPkQuery } from '../../../graphql';
import CompanyInfo from './components/CompanyInfo';
import { ContactsTable } from './components/ContactsTable';
import DataCard from './components/DataCard';
import { QuotasTable } from './components/QuotasTable';

export const CompanyDetails = () => {
  const { companyId: id } = useParams();
  const companyId = ~~(id ?? '');
  const [searchParams] = useSearchParams();
  const to = searchParams.get('to') || undefined;
  const from = searchParams.get('from') || undefined;

  const { data: company, loading } = useGetCompanyByPkQuery({
    variables: {
      companyByPkId: companyId,
    },
  });

  return (
    <div className="-mt-32 p-10">
      {loading ? (
        <div className="mb-8 grid grid-cols-1 gap-8 pb-2 lg:grid-cols-3">
          <DataCardLoading />
          <DataCardLoading />
          <DataCardLoading />
        </div>
      ) : (
        <div className="mb-10 grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <DataCard title="Total Revenue" icon={DollarSign} value={12324} />
          <DataCard title="Subscriptions" icon={Users} value={2522} />
          <DataCard title="Sales" icon={CreditCard} value={263} />
          <DataCard title="Active Now" icon={Activity} value={523} />
        </div>
      )}
      <div className="min-h-screen">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            {company?.company_by_pk?.name}
          </h2>
          <p className="text-gray-500">{company?.company_by_pk?.address}</p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <Card className="flex-grow rounded-lg">
            <CardHeader className="border-b border-gray-200 pb-2 pl-6 pr-6 pt-4">
              <CardTitle className="flex items-center gap-3 text-lg font-medium text-gray-800">
                <Users2Icon className="h-5 w-5 text-gray-500" />
                <span>People</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ContactsTable
                people={company?.company_by_pk?.people.slice(0) ?? []}
                loading={loading}
              />
            </CardContent>
          </Card>
          <CompanyInfo companyInfo={company?.company_by_pk} loading={loading} />
        </div>
        <div className="mt-6 flex justify-center lg:col-span-2">
          <Card className="flex-grow rounded-lg">
            <CardHeader className="border-b border-gray-200 pb-2 pl-6 pr-6 pt-4">
              <CardTitle className="flex items-center gap-3 text-lg font-medium text-gray-800">
                <FileText className="h-5 w-5 text-gray-500" />
                <span>Quotas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <QuotasTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
