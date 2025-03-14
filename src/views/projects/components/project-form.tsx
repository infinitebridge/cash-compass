import { zodResolver } from '@hookform/resolvers/zod';
import { Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select as RegularSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@finbridge-manager-apps/ui';
import { useEffect, useMemo } from 'react';
import { toast } from 'sonner';
import { DatePicker } from '../../../components/date-picker';
import { Select } from '../../../components/select';
import {
  useInsertProjectMutation,
  useUpdateProjectByPkMutation,
} from '../../../graphql';
import { useBusinessStore } from '../../../hooks/use-business-store';
import { useGetPeople } from '../../clients/hooks/use-get-people';
import { useGetProjects } from '../hooks/use-get-projects';
import { useNewProject } from '../hooks/use-new-project';
import NewClientModal from './new-client-modal';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  project_type: z.string().min(1, 'Project type is required'),
  starting_at: z.date(),
  client_id: z.string().min(1, 'Client is required'),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  disabled?: boolean;
  onCreateAccount: (name: string) => void;
  onCreateCategory: (name: string) => void;
  onClose: () => void;
  editMode?: boolean;
};

export const ProjectForm = ({
  id,
  defaultValues,
  disabled,
  onCreateAccount,
  onCreateCategory,
  editMode = false,
  onClose,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      starting_at: new Date(),
    },
    mode: 'onChange',
  });

  const { isValid } = form.formState;
  const [createProject] = useInsertProjectMutation();
  const [updateProject] = useUpdateProjectByPkMutation();
  const { reloadProjects } = useGetProjects();
  const { onPersonCreation, isPersonFormOpen } = useNewProject();
  const { people } = useGetPeople();
  const { businessId } = useBusinessStore();
  const { selectedProject } = useNewProject();

  const handleSubmit = (values: FormValues) => {
    if (selectedProject?.id) {
      toast.loading('Updating project information ...', { id: 'update' });
      updateProject({
        variables: {
          pkColumns: {
            id: selectedProject.id,
          },
          set: {
            name: values.name,
            client_id: Number(values.client_id),
            type: values.project_type,
            description: values.description,
          },
        },
        onCompleted: () => {
          toast.dismiss('update');
          toast.success('Project Information Updated');
          onClose();
          reloadProjects();
        },
        onError: (err) => {
          toast.dismiss('update');
          toast.error(err.message);
        },
      });
    } else {
      toast.loading('Project Creation...', { id: 'create' });
      createProject({
        variables: {
          object: {
            name: values.name,
            client_id: Number(values.client_id),
            type: values.project_type,
            description: values.description,
            business_id: Number(businessId),
          },
        },
        onCompleted: () => {
          toast.dismiss('create');
          toast.success('Project Created');
          onClose();
          reloadProjects();
        },
        onError: (err) => {
          toast.dismiss('create');
          toast.error(err.message);
        },
      });
    }
  };

  const handleDelete = () => {
    toast.success('Deleting Product...');
    // handle deletion logic
  };

  const formattedPeople = useMemo(() => {
    return (
      people?.map((person) => {
        return {
          value: person.id.toString(),
          label: `${person.first_name} ${person.last_name}`,
        };
      }) ?? []
    );
  }, [people]);

  useEffect(() => {
    if (selectedProject) {
      form.reset({
        name: selectedProject.name,
        starting_at: selectedProject.date,
        client_id: selectedProject.client,
        description: selectedProject.description,
        project_type: selectedProject.type,
      });
    }
  }, [selectedProject]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter the project name"
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="starting_at"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Starting Date</FormLabel>
              <FormControl>
                <DatePicker
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="project_type"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Type</FormLabel>
              <FormControl>
                <RegularSelect
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={disabled}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FLAT_RATE">Flat Rate project</SelectItem>
                    <SelectItem value="PER_HOUR">Hourly Project</SelectItem>
                  </SelectContent>
                </RegularSelect>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="client_id"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Client</FormLabel>
              <FormControl>
                <Select
                  placeholder="Select a client"
                  options={formattedPeople}
                  onCreate={() => onPersonCreation()}
                  value={field.value}
                  onChange={field.onChange}
                  disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Optional description"
                  disabled={disabled}
                  value={field.value ?? ''}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={!isValid}>
          {selectedProject?.id ? 'Save changes' : 'Create Project'}
        </Button>
        {id && (
          <Button
            type="button"
            onClick={handleDelete}
            className="w-full border border-red-500 text-red-500 hover:bg-red-50 hover:text-red-500"
            variant="outline"
            disabled={disabled}
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete Project
          </Button>
        )}
      </form>
      <NewClientModal />
    </Form>
  );
};
