import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cash-compass/ui';
import { FunctionComponent, ReactNode } from 'react';

interface RevenueManagementTabsProps {
  tabsConfig: {
    title: string;
    component: ReactNode;
    key: string;
  }[];
  defaultTab: string;
}

const RevenueManagementTabs: FunctionComponent<RevenueManagementTabsProps> = ({
  tabsConfig,
  defaultTab,
}) => {
  return (
    <Tabs defaultValue={defaultTab} className="">
      <TabsList>
        {tabsConfig.map((tab) => {
          return <TabsTrigger value={tab.key}>{tab.title}</TabsTrigger>;
        })}
      </TabsList>

      {tabsConfig.map((tab) => {
        return <TabsContent value={tab.key}>{tab.component}</TabsContent>;
      })}
    </Tabs>
  );
};

export default RevenueManagementTabs;
