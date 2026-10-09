import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "radio", options: ["primary", "secondary", "link"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "Add money" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Sign out" },
};

export const Disabled: Story = {
  args: { variant: "primary", children: "Submit", disabled: true },
};
