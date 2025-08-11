// index.tsx
import { Toaster } from "react-hot-toast";
import { ToasterWrapper } from "./style";

import type { ToasterProps as HotToasterProps } from "react-hot-toast";

// Export interface
export interface ToastProps extends HotToasterProps {}

export function Toast(props: ToastProps) {
  return (
    <ToasterWrapper>
      <Toaster {...props} />
    </ToasterWrapper>
  );
}
