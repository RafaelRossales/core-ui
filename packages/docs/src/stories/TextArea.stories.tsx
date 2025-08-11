import type { StoryObj, Meta } from "@storybook/react";

import { Box, Text, TextArea } from "@ignite-ui/react";
import type { TextAreaProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Type your observations here",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The TextArea component is used for text input fields. You can customize it with props like `placeholder`.",
      },
    },
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can disable the TextArea component using the `disabled` prop.",
      },
    },
  },
};
