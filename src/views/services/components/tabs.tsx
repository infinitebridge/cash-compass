import { Tabs, TabsList, TabsTrigger } from '@finbridge-manager-apps/ui';
import { useSearchParams } from 'react-router-dom';
export const TabsSwitcher = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const initialTab = queryParams.get('service') ?? 'products';
  const handleTabChange = (value: string) => {
    queryParams.set('service', value);
    setQueryParams(queryParams);
  };

  return (
    <Tabs
      defaultValue={initialTab}
      onValueChange={handleTabChange}
      className="w-[400px]"
    >
      <TabsList defaultChecked defaultValue={initialTab}>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="services">Services</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
