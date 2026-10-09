import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  argTypes: {
    active: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: "All" },
};

export const Active: Story = {
  args: { children: "All", active: true },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <Chip active>All</Chip>
      <Chip>Income</Chip>
      <Chip>Expenses</Chip>
    </div>
  ),
};
