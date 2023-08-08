// Button.stories.ts|tsx

// Button.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta: Meta<typeof Button> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Button',
    component: Button,
    argTypes: {
        size: {
            control: 'select',
        },

        children: {
            control: { type: 'string' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    // args: {
    //     type: 'ghost',
    // },

    render: (args) => (
        <div>
            <Button {...args}>Button</Button>
        </div>
    ),
};
