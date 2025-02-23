import type { Meta, StoryObj } from '@storybook/react';
import Input from '../../components/ui/Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email'] },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Username', placeholder: 'Enter your username', type: 'text' },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
  },
};
