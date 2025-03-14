import { Tabs, TabsList, TabsTrigger } from '@finbridge-manager-apps/ui';
import { useSearchParams } from 'react-router-dom';
export const TabsSwitcher = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const initialTab = queryParams.get('category') ?? 'income';

  const handleTabChange = (value: string) => {
    queryParams.set('category', value);
    setQueryParams(queryParams);
  };

  return (
    <Tabs
      defaultValue={initialTab}
      onValueChange={handleTabChange}
      className="w-[400px]"
    >
      <TabsList defaultChecked defaultValue={initialTab}>
        <TabsTrigger value="income">Income</TabsTrigger>
        <TabsTrigger value="expense">Expense</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
