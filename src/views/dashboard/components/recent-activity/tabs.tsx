import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cash-compass/ui';
import { FunctionComponent, ReactNode } from 'react';

interface ActivitiesTabProps {
  tabsConfig: {
    title: string;
    component: ReactNode;
    key: string;
  }[];
  defaultTab: string;
}

const ActivitiesTab: FunctionComponent<ActivitiesTabProps> = ({
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

export default ActivitiesTab;
