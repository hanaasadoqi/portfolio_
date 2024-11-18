export const loadIcon = async (icon: string): Promise<{ default: React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> }> => {
  try {
    if (icon.startsWith("Fa")) {
      const mod = await import("react-icons/fa");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
    if (icon.startsWith("Io")) {
      const mod = await import("react-icons/io");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
    if (icon.startsWith("Gi")) {
      const mod = await import("react-icons/gi");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
    if (icon.startsWith("Si")) {
      const mod = await import("react-icons/si");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
    if (icon.startsWith("Tb")) {
      const mod = await import("react-icons/tb");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
    if (icon.startsWith("Go")) {
      const mod = await import("react-icons/go");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
    if (icon.startsWith("Fi")) {
      const mod = await import("react-icons/fi");
      const Component = mod[icon as keyof typeof mod];
      if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
  } catch (error) {
    console.error(`Failed to load icon: ${icon}`, error);
  }

  const fallbackMod = await import("react-icons/fa");
  return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
};
