import type { StoryObj, Meta } from "@storybook/react";

import { Avartar } from "@ignite-ui/react";
import type { AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avartar,
  args: {
    src: "https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci-1024x576.jpg",
    alt: "Avatar Image",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
