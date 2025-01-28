'use client';
import DashboardHeader from '@/components/dashboard/dashboard_header';
import { DashboardSidebar } from '@/components/dashboard/dashboard_sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SidebarProvider>
        <div className='flex w-full'>
          <DashboardSidebar />
          <main className='w-full flex-grow'>
            {/* dashboard header  */}
            <DashboardHeader />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default DashboardLayout;
