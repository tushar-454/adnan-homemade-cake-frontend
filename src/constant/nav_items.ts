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

const dashboard_nav_items = {
  Inventory: [
    {
      name: 'Inventory',
      link: '/dashboard/inventory',
      icon: LayoutDashboard,
    },
  ],
  Orders: [
    {
      name: 'Orders',
      link: '/dashboard/orders',
      icon: Truck,
    },
    {
      name: 'Pending Orders',
      link: '/dashboard/orders/pending',
      icon: Truck,
    },
    {
      name: 'Completed Orders',
      link: '/dashboard/orders/completed',
      icon: Truck,
    },
    {
      name: 'Cancelled Orders',
      link: '/dashboard/orders/cancelled',
      icon: Truck,
    },
  ],
  Products: [
    {
      name: 'Products',
      link: '/dashboard/products',
      icon: LayoutList,
    },
    {
      name: 'Create Product',
      link: '/dashboard/products/create',
      icon: LayoutList,
    },
    {
      name: 'Update Product',
      link: '/dashboard/products/update',
      icon: LayoutList,
    },
  ],
  Coupon: [
    {
      name: 'Coupon',
      link: '/dashboard/coupon',
      icon: Feather,
    },
    {
      name: 'Create Coupon',
      link: '/dashboard/coupon/create',
      icon: Feather,
    },
    {
      name: 'Update Coupon',
      link: '/dashboard/coupon/update',
      icon: Feather,
    },
  ],
  Categories: [
    {
      name: 'Categories',
      link: '/dashboard/categories',
      icon: FolderKanban,
    },
    {
      name: 'Create Category',
      link: '/dashboard/categories/create',
      icon: FolderKanban,
    },
    {
      name: 'Update Category',
      link: '/dashboard/categories/update',
      icon: FolderKanban,
    },
  ],
  Customers: [
    {
      name: 'Customers',
      link: '/dashboard/customers',
      icon: UsersRound,
    },
  ],
  Settings: [
    {
      name: 'Settings',
      link: '/dashboard/settings',
      icon: Settings,
    },
  ],
};

export type DashboardNavKeys = keyof typeof dashboard_nav_items;

export { dashboard_nav_items, nav_items };
