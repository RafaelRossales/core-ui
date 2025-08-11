import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "@ignite-ui/react";
import type { ButtonProps } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

// Global styles are not applied in Storybook, so we need to import them here
export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Click Me",
    variant: "primary",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    size: {
      options: ["sm", "md"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "Click",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "This button includes an icon on the left side.",
      },
    },
  },
};
