'use client';
import DashboardHeader from '@/components/dashboard/dashboard_header';
import { DashboardSidebar } from '@/components/dashboard/dashboard_sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SessionProvider } from 'next-auth/react';
import React, { useState } from 'react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <SessionProvider>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        {/* dashboard header  */}
        <DashboardHeader open={open} setOpen={setOpen} />
        <div>
          <DashboardSidebar setOpen={setOpen} />
          <main className='p-5'>
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default DashboardLayout;
