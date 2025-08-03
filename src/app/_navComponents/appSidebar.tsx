import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

import ProfileAvatar from "./profileAvatar";

import { cn } from "@/lib/utils";

import { CircleDollarSign, Home, Paintbrush, Search, Settings } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/layout/Header";
import { useAuthContext } from "../provider";

//auth

const sideAuth = () => {
  const { user } = useAuthContext();

  return (
    <div>
      {user?.photoURL && <img src={user?.photoURL} alt='profile' width={35} height={35} className='rounded-full' />}
      <div className="flex flex-col">
        {user?.displayName && <span>{user.displayName}</span>}
        {user?.email && <span>{user.email}</span>}

      </div>
    </div>
  )
}

const listRecentChat = [
  { id: 1, name: "WireFrame to Code App" },
  { id: 2, name: "Personal Blog Project" },
  { id: 3, name: "Music App" },
]


export function AppSidebar() {
  const path = usePathname();

  const items = [
    {
      title: "Workspace",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Design",
      url: "/designs",
      icon: Paintbrush,
    },
    {
      title: "Credits",
      url: "/credits",
      icon: CircleDollarSign,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Theme",
      url: "/theme",
      icon: Paintbrush,
    },
  ]


  return (
    <Sidebar className="px-2 py-4">
      <SidebarHeader>
        <div className="text-primary p-4">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mb-4">
          {/* {sideAuth()} */}
        </SidebarGroup>
        <SidebarGroup className="flex flex-col justify-between h-full">
          <SidebarGroupContent>
            <SidebarGroupLabel className="text-sm text-foreground">Opciones:</SidebarGroupLabel>
            <SidebarMenu className="p-4">
              {items.map((item: any, idx: any) => (
                <SidebarMenuItem key={item.title}>
                  <div>
                    <Link
                      href={item.url}
                      key={idx}
                      className={cn(
                        "p-2 text-md flex items-center rounded-lg gap-2 hover:bg-sidebar-secondary-hover/15",
                        {
                          "bg-primary text-white hover:bg-primary/90 hover:text-white/90":
                            path === item.url,
                          "text-foreground":
                            path !== item.url,
                        }
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup className="mb-4">
            <SidebarGroupLabel className="text-md text-foreground border-b">Recent Chats:</SidebarGroupLabel>
            <SidebarMenu className="py-2 px-4">
              {listRecentChat.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <Button variant={"ghost"} className="hover:bg-none active:bg-none">
                    <Link href={`/chat/${chat.id}`} className="text-sm flex items-center gap-2">
                      <span>{chat.name}</span>
                    </Link>
                  </Button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarFooter className="text-center">
            <SidebarGroupContent className="flex gap-4 items-center jus">
              <ProfileAvatar />
              <Button onClick={() => { }}
                variant={"outline"}
                className="border-sm bg-sidebar-ring/30 text-foreground p-2"
              >Cerrar Sesión</Button>
            </SidebarGroupContent>
            <span className="text-sm">Derechos &copy; Reservados Copyright</span>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  );
}