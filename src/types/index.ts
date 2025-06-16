export interface NavItem {
  icon?: React.ReactNode;
  label: string;
  href?: string;
}

export interface CategoryItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  color: 'green' | 'red' | 'purple' | 'blue';
  link: string;
}