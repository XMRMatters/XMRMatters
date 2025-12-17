import { ReactNode } from 'react';
import { Home, Info, Heart, Eye, LucideIcon } from 'lucide-react';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { DonatePage } from '../pages/DonatePage';
import { Monero } from '../pages/Monero';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Page } from '../types';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  page: Page;
  label: string;
  featured?: boolean;
  icon?: LucideIcon;
}

export type RouteMap = Record<Page, string>;

export const routeMap: RouteMap = {
  'Home': '/home',
  'About': '/about',
  'Donate': '/donate',
  'Monero': '/monero',
};

export const createRoutes = (
  onNavigate: (page: Page) => void
): (RouteConfig | { path: string; element: ReactNode; isNotFound?: true })[] => [
  {
    path: '/home',
    element: <HomePage onNavigate={onNavigate} />,
    page: 'Home',
    label: 'Home',
  },
  {
    path: '/',
    element: <HomePage onNavigate={onNavigate} />,
    page: 'Home',
    label: 'Home',
  },
  {
    path: '/about',
    element: <AboutPage />,
    page: 'About',
    label: 'About',
  },
  {
    path: '/monero',
    element: <Monero />,
    page: 'Monero',
    label: 'Monero & Privacy',
    featured: true,
  },
  {
    path: '/donate',
    element: <DonatePage />,
    page: 'Donate',
    label: 'Donate',
  },
  {
    path: '*',
    element: <NotFoundPage />,
    isNotFound: true,
  },
];

export const navigationItems: Array<{
  page: Page;
  label: string;
  featured?: boolean;
  icon: LucideIcon;
}> = [
  { page: 'Home', label: 'Home', icon: Home },
  { page: 'About', label: 'About', icon: Info },
  { page: 'Donate', label: 'Donate', icon: Heart },
  { page: 'Monero', label: 'Monero & Privacy', featured: true, icon: Eye },
];
