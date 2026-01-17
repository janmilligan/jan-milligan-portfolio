export interface Photo {
  id: number;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface NavItem {
  label: string;
  path: string;
}