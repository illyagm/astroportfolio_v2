import type { Meta, StoryObj } from '@storybook/react';
import Card from '../../components/ui/Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    footer: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    content: 'This is the card content.',
    footer: 'Card Footer',
  },
};

export const WithBackgroundImage: Story = {
  args: {
    title: 'Card with Background',
    content: 'This card has a background image.',
    footer: 'Card Footer',
    backgroundImage: 'https://via.placeholder.com/400',
  },
};
