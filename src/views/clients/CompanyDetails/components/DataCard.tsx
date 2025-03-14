import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';
import { LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import CountUp from 'react-countup';

interface DataCardProps {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  value: number;
}
const DataCard = ({ icon: Icon, title, value }: DataCardProps) => {
  return (
    <Card x-chunk="dashboard-01-chunk-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="bg-primary/30 text-primary/80 rounded-md p-1" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          +
          <CountUp
            preserveValue
            start={0}
            end={value}
            decimals={2}
            decimalPlaces={2}
          />
        </div>
        <p className="text-muted-foreground text-xs">+19% from last month</p>
      </CardContent>
    </Card>
  );
};

export default DataCard;
