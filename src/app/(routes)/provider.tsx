"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "../_navComponents/appHeader";
import { AppSidebar } from "../_navComponents/appSidebar";

export default function DashboardProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader />
        {/* <SidebarTrigger /> */}
        <div className="grid min-h-screen w-full bg-background">{children}</div>
      </main>
    </SidebarProvider>
  );
}
