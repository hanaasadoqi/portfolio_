export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export interface TabsProps {
  label?: string;
  children: React.ReactElement<TabProps>[];
}
