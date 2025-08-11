import { AvatarContainer, AvatarImage, AvatarFallback } from "./styles";
import { User } from "phosphor-react";

export interface AvatarProps extends React.ComponentProps<typeof AvatarImage> {}

export function Avartar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avartar.displayName = "Avatar";
