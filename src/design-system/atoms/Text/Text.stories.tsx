import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "title",
        "subtitle",
        "body",
        "hint",
        "error",
        "success",
        "dim",
        "legal",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Title: Story = {
  args: { variant: "title", children: "Good morning, Jordan" },
};

export const Subtitle: Story = {
  args: { variant: "subtitle", children: "Last updated just now" },
};

export const Body: Story = {
  args: { variant: "body", children: "Your balance is $8,204.19" },
};

export const Hint: Story = {
  args: { variant: "hint", children: "You have 3 daily transfers remaining" },
};

export const Error: Story = {
  args: { variant: "error", children: "Amount exceeds daily limit" },
};

export const Success: Story = {
  args: { variant: "success", children: "Transfer complete" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text variant="title">Title</Text>
      <Text variant="subtitle">Subtitle</Text>
      <Text variant="body">Body text</Text>
      <Text variant="hint">Hint text</Text>
      <Text variant="error">Error message</Text>
      <Text variant="success">Success message</Text>
      <Text variant="dim">Dimmed text</Text>
      <Text variant="legal">Legal disclaimer text</Text>
    </div>
  ),
};
