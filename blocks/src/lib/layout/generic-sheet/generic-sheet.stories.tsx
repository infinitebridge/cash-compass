// components/GenericSheet.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { GenericSheet } from './generic-sheet';
import { Button } from '@cash-compass/ui/button';
import { useState } from 'react';

// Define the type for the data used in the stories
type SampleData = {
  id: string;
  name: string;
  email?: string;
};

// Meta configuration for the component
const meta: Meta<typeof GenericSheet<SampleData>> = {
  title: 'Layout/generic-sheet/GenericSheet',
  component: GenericSheet,
  tags: ['autodocs'], // Automatically generate docs from TypeScript types
  parameters: {
    layout: 'centered', // Center the component in the Storybook canvas
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onOpenChange: { action: 'onOpenChange' }, // Logs the action in Storybook's actions panel
    title: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof GenericSheet<SampleData>>;

// Helper component to manage the open/close state for the sheet
const SheetWrapper = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Sheet</Button>
      <GenericSheet<SampleData>
        {...args}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
      />
    </div>
  );
};

// Default story: Using the default form layout
export const Default: Story = {
  render: (args: any) => <SheetWrapper {...args} />,
  args: {
    data: { id: '1', name: 'John Doe' },
    title: 'Default Sheet',
  },
};

// Custom content story: Using a custom renderContent function
export const CustomContent: Story = {
  render: (args: any) => <SheetWrapper {...args} />,
  args: {
    data: { id: '1', name: 'John Doe', email: 'john@example.com' },
    title: 'Custom Content Sheet',
    renderContent: (data: SampleData) => (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{data.name}</h3>
        <p>
          <strong>ID:</strong> {data.id}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
      </div>
    ),
  },
};

// Custom footer actions story: Using custom footer actions
export const CustomFooter: Story = {
  render: (args: any) => <SheetWrapper {...args} />,
  args: {
    data: { id: '1', name: 'John Doe' },
    title: 'Custom Footer Sheet',
    footerActions: (
      <>
        <Button variant="destructive" className="w-full">
          Delete
        </Button>
        <Button variant="outline" className="w-full mt-2">
          Cancel
        </Button>
      </>
    ),
  },
};

// Custom styling story: Using a custom className
export const CustomStyling: Story = {
  render: (args: any) => <SheetWrapper {...args} />,
  args: {
    data: { id: '1', name: 'John Doe' },
    title: 'Custom Styling Sheet',
    className: 'bg-gray-100 border-l-4 border-blue-500',
  },
};
