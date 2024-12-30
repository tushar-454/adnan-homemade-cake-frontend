import {
  CakeIcon,
  ChartNetwork,
  Feather,
  Flame,
  Images,
  Menu,
  MessageSquareDiff,
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
    name: 'Reviews',
    link: '#reviews',
    icon: MessageSquareDiff,
  },
  {
    name: 'Gallery',
    link: '#gallery',
    icon: Images,
  },
];

export { nav_items };
