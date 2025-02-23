import type { Meta, StoryObj } from '@storybook/react';
import Toast from '../../components/ui/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Utilities/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'This is a toast notification',
    duration: 5,
  },
};
