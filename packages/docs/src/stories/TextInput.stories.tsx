import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextInput } from "@ignite-ui/react";
import type { TextInputProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Input",
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: "Type your Email address",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The TextInput component is used for text input fields. You can customize it with props like `placeholder`.",
      },
    },
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can disable the TextInput component using the `disabled` prop.",
      },
    },
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "cal.com/",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can add a prefix to the TextInput component using the `prefix` prop.",
      },
    },
  },
};
