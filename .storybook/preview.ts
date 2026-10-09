import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0e1116" },
        { name: "surface", value: "#171b22" },
      ],
    },
  },
};

export default preview;
