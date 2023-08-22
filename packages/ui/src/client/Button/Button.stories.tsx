import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
};

export default meta;

export const Default: Story = {
    args: {
        children: 'Hello World',
    },
};

type Story = StoryObj<typeof Button>;
