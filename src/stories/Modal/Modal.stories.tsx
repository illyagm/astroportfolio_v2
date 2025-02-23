import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../components/ui/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Layout/Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Open: Story = {
  args: { isOpen: true, children: 'This is a modal' },
};

export const Closed: Story = {
  args: { isOpen: false },
};
