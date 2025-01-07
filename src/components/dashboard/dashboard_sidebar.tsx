'use client';
import { assets } from '@/assets/assets';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard_nav_items } from '@/constant/nav_items';
import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

const DashboardSidebar = () => {
  const { data: user } = useSession();

  return (
    <Sidebar variant='floating'>
      <SidebarHeader>
        <Link href='/'>Home</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboard_nav_items.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link href={item.link}>
                      <item.icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Image
              src={user?.user?.image || assets.DEFAULT_AVATAR}
              alt={`${user?.user?.name} user_image`}
              width={50}
              height={50}
              className='size-10 min-w-10 cursor-pointer rounded-full object-cover'
            />
            <span className='flex flex-col'>
              <small>{user?.user?.name || 'Name'}</small>
              <small>{user?.user?.email?.split('@')[0] || 'Email'}</small>
            </span>
          </div>
          <div>
            <LogOut
              className='cursor-pointer text-red-600'
              onClick={() => {
                signOut();
              }}
            />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export { DashboardSidebar };
