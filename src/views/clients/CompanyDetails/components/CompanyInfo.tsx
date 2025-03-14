import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@finbridge-manager-apps/ui';
import { BuildingIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { GetCompanyByPkQuery } from '../../../../graphql';

type Props = {
  companyInfo: GetCompanyByPkQuery['company_by_pk'];
  loading: boolean;
};

const CompanyInfo = ({ companyInfo, loading }: Props) => {
  if (loading) {
    return <DataCardLoading />;
  }

  return (
    <Card className="w-[10%] flex-grow overflow-hidden rounded-lg">
      <CardHeader className="border-b border-gray-200 px-6 py-3.5">
        <CardTitle className="text-md font-semibold text-gray-800">
          Company Information
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-5">
          <p className="mb-1 flex flex-row items-center gap-2 text-gray-600">
            <BuildingIcon className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Name:</span>
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {companyInfo?.name}
          </p>
        </div>
        <div className="mb-5">
          <p className="mb-1 flex flex-row items-center gap-2 text-gray-600">
            <MapPinIcon className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Address:</span>
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {companyInfo?.address}
            1234 Elm Street Springfield, IL 62701{' '}
            {companyInfo?.country?.toUpperCase()}
          </p>
        </div>
        <div className="mb-5">
          <p className="mb-1 flex flex-row items-center gap-2 text-gray-600">
            <PhoneIcon className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Phone:</span>
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {companyInfo?.business_phone}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyInfo;

export const DataCardLoading = () => {
  return (
    <Card className="flex-grow">
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="size-12" />
      </CardHeader>
      <CardContent className="h-full">
        <Skeleton className="mb-1 h-4 w-40" />
        <Skeleton className="mb-5 h-[0.1em] bg-gray-500" />
        <Skeleton className="mb-1 h-4 w-40" />
        <Skeleton className="mb-5 h-[0.1em] bg-gray-500" />
        <Skeleton className="mb-1 h-4 w-40" />
      </CardContent>
    </Card>
  );
};
