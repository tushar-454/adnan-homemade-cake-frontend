'use client';
import { DashboardSidebar } from '@/components/dashboard/dashboard_sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default DashboardLayout;
