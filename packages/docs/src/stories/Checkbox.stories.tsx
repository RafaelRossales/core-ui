import type { StoryObj, Meta } from "@storybook/react";

import { Box, Checkbox, Text } from "@ignite-ui/react";
import type { CheckboxProps } from "@ignite-ui/react";

export default {
  title: "Form/Input Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
};
