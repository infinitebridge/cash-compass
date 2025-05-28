import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@cash-compass/ui/tabs';
import { Dispatch, FunctionComponent, ReactNode, SetStateAction } from 'react';

interface RevenueManagementTabsProps {
  tabsConfig: {
    title: string;
    component: ReactNode;
    key: string;
  }[];
  activeTab: number;
  defaultTab: string;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const CustomRevenueManagementTabs: FunctionComponent<
  RevenueManagementTabsProps
> = ({ tabsConfig, defaultTab, activeTab, setActiveTab }) => {
  return (
    <Tabs
      value={tabsConfig[activeTab]?.key}
      onValueChange={(val) =>
        setActiveTab(tabsConfig.findIndex((item) => item.key === val))
      }
      defaultValue={defaultTab}
      className=""
    >
      <TabsList>
        {tabsConfig.map((tab) => (
          <TabsTrigger key={tab.key} value={tab.key}>
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabsConfig.map((tab) => (
        <TabsContent key={tab.key} value={tab.key}>
          {tab.component}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default CustomRevenueManagementTabs;
