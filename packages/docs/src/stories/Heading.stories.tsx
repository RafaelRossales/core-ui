import type { StoryObj, Meta } from "@storybook/react";

import { Heading } from "@ignite-ui/react";
import type { HeadingProps } from "@ignite-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    children: " Heading Example Children",
    size: "md",
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "Heading Example",
    as: "h1",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can change the HTML tag of the Heading component using the `as` prop.",
      },
    },
  },
};
