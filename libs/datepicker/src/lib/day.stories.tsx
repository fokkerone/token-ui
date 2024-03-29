// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Day from './components/day';

const meta: Meta<typeof Day> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'ppDatePicker/Day',
    component: Day,
};

export default meta;
type Story = StoryObj<typeof Day>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: () => <Day children={12} day={''} />,
};
