import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "/avatar.svg",
    alt: "Profile photo",
  },
};

export const Clickable: Story = {
  args: {
    src: "/avatar.svg",
    alt: "Open account menu",
    onClick: () => {},
  },
};

export const CustomSize: Story = {
  args: {
    src: "/avatar.svg",
    alt: "Large avatar",
    size: 56,
  },
};
