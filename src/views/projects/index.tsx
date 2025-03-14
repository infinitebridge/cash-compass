import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@finbridge-manager-apps/ui';
import { formatDistanceToNow } from 'date-fns';
import { PlusIcon } from 'lucide-react';
import { useMemo } from 'react';
import { DataTableSkeleton } from './components/data-table/data-table-skeleton';
import { ProjectsDataGrid } from './components/projects-datagrid';
import { useGetProjects } from './hooks/use-get-projects';
import { useNewProject } from './hooks/use-new-project';

const ProjectsPage = () => {
  const { onOpenNew } = useNewProject();

  const { projects, loadProjects } = useGetProjects();

  const rows = useMemo(
    () =>
      projects?.map((prj) => ({
        id: prj.id,
        name: prj.name,
        client: `${prj.person?.first_name} ${prj.person?.last_name}`,
        description: prj.description,
        type: prj.type,
        date: prj.created_at,
        readableDate: prj.created_at
          ? formatDistanceToNow(new Date(prj.created_at))
          : '',
      })) ?? [],
    [projects]
  );

  return (
    <div className="mx-auto -mt-24 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">Projects Page</CardTitle>
          <div className="flex flex-row items-center justify-end">
            <Button size="sm" onClick={onOpenNew}>
              <PlusIcon className="mr-3 h-5 w-5" />
              Add New
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mx-auto w-full max-w-screen-2xl py-4">
            {loadProjects ? (
              <DataTableSkeleton
                columnCount={5}
                searchableColumnCount={1}
                filterableColumnCount={2}
                rowCount={5}
                cellWidths={['10rem', '40rem', '12rem', '12rem', '8rem']}
                shrinkZero
              />
            ) : (
              <ProjectsDataGrid count={rows.length} data={rows} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectsPage;
