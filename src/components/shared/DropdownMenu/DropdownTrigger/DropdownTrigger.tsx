import React from "react";
import { IconButton, IconButtonProps, LinkButton, LinkButtonProps, BaseButton, BaseButtonProps } from '@/components/shared'

// Base props shared among button types
interface BaseTriggerProps {
  ariaExpanded: boolean;
  ariaControls: string;
  buttonComponentType: "icon" | "link" | "button";
  children?: React.ReactNode;
}

// Props for IconButton type
interface IconButtonTriggerProps extends BaseTriggerProps {
  buttonComponentType: "icon";
  // icon: React.ReactElement;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  iconButtonProps: IconButtonProps;
}

// Props for LinkButton type
interface LinkButtonTriggerProps extends BaseTriggerProps {
  buttonComponentType: "link";
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  linkButtonProps: LinkButtonProps;
}

// Props for native button type
interface ButtonTriggerProps extends BaseTriggerProps {
  buttonComponentType: "button";
  buttonProps: BaseButtonProps;
}

// Union type for all possible button props
type DropdownTriggerProps =
  | IconButtonTriggerProps
  | LinkButtonTriggerProps
  | ButtonTriggerProps;

const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  ariaExpanded,
  ariaControls,
  buttonComponentType,
  children,
  ...rest
}) => {
  switch (buttonComponentType) {
    case "icon":
      const { onClick, iconButtonProps } = rest as IconButtonTriggerProps;
      return (
        <IconButton
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          onClick={onClick}
          {...iconButtonProps}
        >
          {children}
        </IconButton>
      );

    case "button":
      const { buttonProps } = rest as ButtonTriggerProps;
      return (
        <BaseButton
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          {...buttonProps}
        >
          {children}
        </BaseButton>
      );

    case "link":
      const { onClick: linkOnClick, linkButtonProps } =
        rest as LinkButtonTriggerProps;
      return (
        <LinkButton
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          onClick={linkOnClick}
          {...linkButtonProps}
        >
          {children}
        </LinkButton>
      );

    default:
      throw new Error("Invalid buttonComponentType");
  }
};

export default DropdownTrigger;
