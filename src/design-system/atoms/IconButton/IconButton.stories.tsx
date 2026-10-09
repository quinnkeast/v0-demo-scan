import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Search: Story = {
  args: {
    "aria-label": "Search",
    children: "⌕",
  },
};

export const Notifications: Story = {
  args: {
    "aria-label": "View notifications",
    children: "◔",
  },
};
