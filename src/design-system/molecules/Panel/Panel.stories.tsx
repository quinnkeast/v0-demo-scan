import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./Panel";

const meta: Meta<typeof Panel> = {
  title: "Molecules/Panel",
  component: Panel,
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const WithTitle: Story = {
  args: {
    title: "Recent activity",
    children: <p style={{ margin: 0 }}>Panel content goes here</p>,
  },
};

export const WithTitleAndAction: Story = {
  args: {
    title: "Recent activity",
    action: (
      <button
        style={{
          background: "none",
          border: "none",
          color: "var(--accent)",
          fontSize: "0.9rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        View all
      </button>
    ),
    children: <p style={{ margin: 0 }}>Panel content goes here</p>,
  },
};

export const WithFootnote: Story = {
  args: {
    title: "Activity",
    footnote: "Showing last 7 days",
    children: <p style={{ margin: 0 }}>Panel content goes here</p>,
  },
};

export const ContentOnly: Story = {
  args: {
    children: <p style={{ margin: 0 }}>A panel with no header</p>,
  },
};
