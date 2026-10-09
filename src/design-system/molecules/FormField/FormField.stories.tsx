import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../../atoms/Input/Input";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: "Recipient",
    children: <Input placeholder="Enter name or email" />,
  },
};

export const WithHint: Story = {
  args: {
    label: "Amount",
    hint: "You have 3 daily transfers remaining",
    children: <Input placeholder="0.00" inputMode="decimal" />,
  },
};

export const WithError: Story = {
  args: {
    label: "Amount",
    error: "Amount exceeds daily limit",
    children: <Input placeholder="0.00" />,
  },
};

export const WithSelect: Story = {
  render: () => (
    <FormField label="Language">
      <select
        style={{
          width: "100%",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "0.65rem 0.85rem",
          color: "var(--text)",
          fontSize: "0.95rem",
        }}
      >
        <option>English</option>
        <option>Español</option>
      </select>
    </FormField>
  ),
};
