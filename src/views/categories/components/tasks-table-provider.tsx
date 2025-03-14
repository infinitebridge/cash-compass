import * as React from 'react';

import {
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@finbridge-manager-apps/ui';
import { dataTableConfig, type DataTableConfig } from '../config/data-table';

type FeatureFlagValue = DataTableConfig['featureFlags'][number]['value'];

interface TasksTableContextProps {
  featureFlags: FeatureFlagValue[];
  setFeatureFlags: React.Dispatch<React.SetStateAction<FeatureFlagValue[]>>;
}

const TasksTableContext = React.createContext<TasksTableContextProps>({
  featureFlags: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFeatureFlags: () => {},
});

export function useTasksTable() {
  const context = React.useContext(TasksTableContext);
  if (!context) {
    throw new Error('useTasksTable must be used within a TasksTableProvider');
  }
  return context;
}

export function TasksTableProvider({ children }: React.PropsWithChildren) {
  const [featureFlags, setFeatureFlags] = React.useState<FeatureFlagValue[]>(
    []
  );

  return (
    <TasksTableContext.Provider
      value={{
        featureFlags,
        setFeatureFlags,
      }}
    >
      <div className="w-full overflow-x-auto">
        <ToggleGroup
          type="multiple"
          variant="outline"
          size="sm"
          value={featureFlags}
          onValueChange={(value: FeatureFlagValue[]) => setFeatureFlags(value)}
          className="w-fit"
        >
          {dataTableConfig.featureFlags.map((flag) => (
            <Tooltip key={flag.value} delayDuration={250}>
              <ToggleGroupItem
                value={flag.value}
                className="whitespace-nowrap px-3 text-xs"
                asChild
              >
                <TooltipTrigger>
                  <flag.icon
                    className="mr-2 size-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  {flag.label}
                </TooltipTrigger>
              </ToggleGroupItem>
              <TooltipContent
                align="start"
                side="bottom"
                sideOffset={6}
                className="bg-background text-foreground flex max-w-60 flex-col space-y-1.5 border py-2 font-semibold"
              >
                <div>{flag.tooltipTitle}</div>
                <div className="text-muted-foreground text-xs">
                  {flag.tooltipDescription}
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
      </div>
      {children}
    </TasksTableContext.Provider>
  );
}
