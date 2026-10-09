import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
  argTypes: {
    variant: { control: "radio", options: ["empty", "success"] },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Empty: Story = {
  args: {
    title: "No transactions yet",
    body: "Your transactions will appear here once you start making payments.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Transfer complete",
    body: "Your money is on the way.",
    icon: "✓",
  },
};
