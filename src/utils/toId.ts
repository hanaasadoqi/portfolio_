export const toId = (label: string) => {
  return label.toLowerCase().replace(/\s+/g, '-');
};
