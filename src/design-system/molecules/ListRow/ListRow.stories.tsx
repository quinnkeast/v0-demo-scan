import type { Meta, StoryObj } from "@storybook/react";
import { ListRow, List } from "./ListRow";
import { Badge } from "../../atoms/Badge/Badge";

const meta: Meta<typeof ListRow> = {
  title: "Molecules/ListRow",
  component: ListRow,
};

export default meta;
type Story = StoryObj<typeof ListRow>;

export const Simple: Story = {
  args: {
    primary: "Blue Bottle Coffee",
    secondary: "-$5.40",
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
};

export const WithBadge: Story = {
  args: {
    primary: "Payroll deposit",
    secondary: (
      <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        +$2,480.00
        <Badge>Pending</Badge>
      </span>
    ),
  },
  decorators: [
    (Story) => (
      <List>
        <Story />
      </List>
    ),
  ],
};

export const MultipleRows: Story = {
  render: () => (
    <List>
      <ListRow primary="Blue Bottle Coffee" secondary="-$5.40" />
      <ListRow primary="Payroll deposit" secondary="+$2,480.00" />
      <ListRow primary="Electric bill" secondary="-$142.30" />
    </List>
  ),
};
