import type { Meta, StoryObj } from '@storybook/react';
import TableComponent from './generic-table';

const meta: Meta<typeof TableComponent> = {
  title: 'Data Display/generic-table',
  component: TableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TableComponent>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Shows the loading state of the table with a skeleton loader.',
      },
    },
  },
  render: () => (
    <div className="h-screen w-full flex items-center justify-center">
      <TableComponent />
    </div>
  ),
};
