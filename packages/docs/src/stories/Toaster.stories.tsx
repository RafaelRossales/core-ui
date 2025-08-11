import type { StoryObj, Meta } from "@storybook/react";
import { Button, Toast } from "@ignite-ui/react";
import type { ToastProps } from "@ignite-ui/react";

import { toast } from "react-hot-toast";

export default {
  title: "Form/Toast",
  component: Toast,
  args: {
    message: "Teste 123",
    position: "bottom-right",
    type: "success",
  },
  decorators: [],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
