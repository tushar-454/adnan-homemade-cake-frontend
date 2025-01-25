import {
  CakeIcon,
  ChartNetwork,
  Feather,
  Flame,
  FolderKanban,
  Images,
  LayoutDashboard,
  LayoutList,
  Menu,
  Settings,
  Truck,
  UsersRound,
} from 'lucide-react';

export type TNavItem = {
  name: string;
  link: string;
  icon: typeof Menu;
};

const nav_items: TNavItem[] = [
  {
    name: 'Cakes',
    link: '/cakes',
    icon: CakeIcon,
  },
  {
    name: 'Top Sell',
    link: '#top_sell',
    icon: ChartNetwork,
  },
  {
    name: 'Featured',
    link: '#featured',
    icon: Feather,
  },
  {
    name: 'Upcoming',
    link: '#upcoming',
    icon: Flame,
  },
  {
    name: 'Gallery',
    link: '#gallery',
    icon: Images,
  },
  {
    name: 'Track Order',
    link: '/track-order',
    icon: Truck,
  },
];

const dashboard_nav_items: TNavItem[] = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Orders',
    link: '/dashboard/orders',
    icon: FolderKanban,
  },
  {
    name: 'Products',
    link: '/dashboard/products',
    icon: LayoutList,
  },
  {
    name: 'Customers',
    link: '/dashboard/customers',
    icon: UsersRound,
  },
  {
    name: 'Settings',
    link: '/dashboard/settings',
    icon: Settings,
  },
];

export { dashboard_nav_items, nav_items };
