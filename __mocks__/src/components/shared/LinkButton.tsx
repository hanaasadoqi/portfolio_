import React from "react";
import { LinkButtonProps } from "@/components";

const LinkButton: React.FC<LinkButtonProps> = ({
  href = "#",
  children,
  disabled = false,
  ariaLabel = "Link Button",
  ariaCurrent,
  className,
  onClick,
}) => {
  const currentAtt: "page" | undefined = ariaCurrent ? "page" : undefined;

  const ariaAttributes = {
    "aria-label": ariaLabel,
    "aria-disabled": disabled,
    "aria-current": currentAtt,
  };
  return (
    <a href={href} {...ariaAttributes} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default LinkButton;
