import type { StoryObj, Meta } from "@storybook/react";

import { Text } from "@ignite-ui/react";
import type { TextProps } from "@ignite-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    size: "md",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {
  args: {
    children: "This is a primary text example.",
  },
};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "This is a secondary text example.",
    as: "strong",
    size: "2xl",
  },
};
