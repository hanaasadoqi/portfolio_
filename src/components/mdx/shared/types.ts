export interface TabProps {
  label: string;
  children: React.ReactNode;
}

export interface TabsProps {
  children: React.ReactElement<TabProps>[];
}
