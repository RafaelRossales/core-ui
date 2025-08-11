import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text } from "@ignite-ui/react";
import type { BoxProps } from "@ignite-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    children: (
      <>
        <Text>Box component</Text>
        <Text>It can contain any content you want.</Text>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
