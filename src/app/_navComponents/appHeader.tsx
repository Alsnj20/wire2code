import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import ProfileAvatar from "./profileAvatar";
import Image from "next/image";
import { Logo } from "@/components/layout/Header";

export default function AppHeader({ hideSidebar = false }) {
  return (
    <div className="p-4 shadow-sm flex items-center justify-between w-full ">
      {!hideSidebar ? (
        <SidebarTrigger />
      ) : (
        <div className="flex items-center gap-2">
          <Logo />
        </div>
      )}
    </div>
  );
}
