export type Page = 'Home' | 'About' | 'Donate' | 'Monero';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface NavigationItem {
  page: Page;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  featured?: boolean;
}

export interface RouteDefinition {
  path: string;
  page: Page;
  label: string;
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

