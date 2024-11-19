// // export const loadIcon = async (icon: string): Promise<{ default: React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> }> => {
// //   try {
// //     if (icon.startsWith("Fa")) {
// //       const mod = await import("react-icons/fa");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Io")) {
// //       const mod = await import("react-icons/io");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Gi")) {
// //       const mod = await import("react-icons/gi");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Si")) {
// //       const mod = await import("react-icons/si");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Tb")) {
// //       const mod = await import("react-icons/tb");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Go")) {
// //       const mod = await import("react-icons/go");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Fi")) {
// //       const mod = await import("react-icons/fi");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //     if (icon.startsWith("Md")) {
// //       const mod = await import("react-icons/md");
// //       const Component = mod[icon as keyof typeof mod];
// //       if (Component) return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //   } catch (error) {
// //     console.error(`Failed to load icon: ${icon}`, error);
// //   }

// //   const fallbackMod = await import("react-icons/fa");
// //   return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// // };


// // const iconModules = {
// //   Fa: () => import("react-icons/fa"),
// //   Io: () => import("react-icons/io"),
// //   Gi: () => import("react-icons/gi"),
// //   Si: () => import("react-icons/si"),
// //   Tb: () => import("react-icons/tb"),
// //   Go: () => import("react-icons/go"),
// //   Fi: () => import("react-icons/fi"),
// //   Md: () => import("react-icons/md"),
// // };


// // export const loadIcon = async (
// //   icon: string
// // ): Promise<{ default: React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> }> => {
// //   const prefix = icon.slice(0, 2); // Extract prefix, e.g., "Fa"
// //   const loadModule = iconModules[prefix];

// //   if (!loadModule) {
// //     console.error(`No module found for icon: ${icon}`);
// //     const fallbackMod = await import("react-icons/fa");
// //     return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //   }

// //   try {
// //     const mod = await loadModule();
// //     const Component = mod[icon as keyof typeof mod];
// //     if (Component) {
// //       return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //   } catch (error) {
// //     console.error(`Failed to load icon: ${icon}`, error);
// //   }

// //   // Return fallback if icon not found
// //   const fallbackMod = await import("react-icons/fa");
// //   return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// // };


// const iconModules = {
//   Fa: () => import("react-icons/fa"),
//   Io: () => import("react-icons/io"),
//   Gi: () => import("react-icons/gi"),
//   Si: () => import("react-icons/si"),
//   Tb: () => import("react-icons/tb"),
//   Go: () => import("react-icons/go"),
//   Fi: () => import("react-icons/fi"),
//   Md: () => import("react-icons/md"),
// };

// // Define the type for allowed keys
// type IconPrefix = keyof typeof iconModules;

// // export const loadIcon = async (
// //   icon: string
// // ): Promise<{ default: React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> }> => {
// //   const prefix = icon.slice(0, 2) as IconPrefix; // Type assertion to restrict to valid keys

// //   if (!iconModules[prefix]) {
// //     console.error(`No module found for icon: ${icon}`);
// //     const fallbackMod = await import("react-icons/fa");
// //     return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //   }

// //   try {
// //     const mod = await iconModules[prefix]();
// //     const Component = mod[icon as keyof typeof mod];
// //     if (Component) {
// //       return { default: Component as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// //     }
// //   } catch (error) {
// //     console.error(`Failed to load icon: ${icon}`, error);
// //   }

// //   // Return fallback if icon not found
// //   const fallbackMod = await import("react-icons/fa");
// //   return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
// // };
// function isIconPrefix(key: string): key is IconPrefix {
//   return key in iconModules;
// }

// export const loadIcon = async (icon: string) => {
//   const prefix = icon.slice(0, 2);

//   if (!isIconPrefix(prefix)) {
//     console.error(`No module found for icon: ${icon}`);
//     const fallbackMod = await import("react-icons/fa");
//     return { default: fallbackMod.FaSpinner };
//   }

//   try {
//     const mod = await iconModules[prefix]();
//     const Component = mod[icon as keyof typeof mod];
//     if (Component) {
//       return { default: Component };
//     }
//   } catch (error) {
//     console.error(`Failed to load icon: ${icon}`, error);
//   }

//   const fallbackMod = await import("react-icons/fa");
//   return { default: fallbackMod.FaSpinner };
// };








export const loadIcon = async (
  icon: string
): Promise<{ default: React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> }> => {
  const prefixToModuleMap = {
    Fa: () => import("react-icons/fa"),
    Io: () => import("react-icons/io"),
    Gi: () => import("react-icons/gi"),
    Si: () => import("react-icons/si"),
    Tb: () => import("react-icons/tb"),
    Go: () => import("react-icons/go"),
    Fi: () => import("react-icons/fi"),
    Md: () => import("react-icons/md"),
  } as const;

  const prefix = icon.slice(0, 2) as keyof typeof prefixToModuleMap;

  const loadModule = prefixToModuleMap[prefix];
  if (!loadModule) {
    console.error(`No module found for icon prefix: ${prefix}`);
    const fallbackMod = await import("react-icons/fa");
    return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
  }

  try {
    const mod = await loadModule();
    const Component = mod[icon as keyof typeof mod];
    if (Component) {
      return { default: Component as unknown as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
    }
  } catch (error) {
    console.error(`Failed to load icon: ${icon}`, error);
  }

  // Return fallback if the icon is not found
  const fallbackMod = await import("react-icons/fa");
  return { default: fallbackMod.FaSpinner as React.ComponentType<{ size?: number; className?: string; "aria-label"?: string }> };
};
