"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Users,
  Settings,
  ShoppingBag,
  BarChart3,
  ShieldCheck,
  HelpCircle,
  User,
  Sparkles,
  Terminal,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Link from "next/link";
import { useState } from "react";

const sidebarItems = [
  {
    group: "General",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Users", url: "/users", icon: Users },
      { title: "Products", url: "/products", icon: ShoppingBag },
    ],
  },
  {
    group: "Analytics",
    items: [
      { title: "Reports", url: "/reports", icon: BarChart3 },
      { title: "Permissions", url: "/permissions", icon: ShieldCheck },
    ],
  },
  {
    group: "Support",
    items: [
      { title: "Settings", url: "/settings", icon: Settings },
      { title: "Help Center", url: "/help", icon: HelpCircle },
    ],
  },
];
const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton>
          <Terminal />
          <span className="text-md tracking-tight">Training DashBoard</span>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarSeparator className="mx-0" />
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          {sidebarItems.map((group) => (
            <SidebarGroup key={group.group}>
              <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={item.title}>
                        <Link href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </Collapsible>
      </SidebarContent>
      <SidebarSeparator className="mx-0" />
      <SidebarFooter className="bottom-0 sticky">
        <SidebarMenuButton className="bg-violet-500 hover:bg-violet-400 text-center">
          <Sparkles className="white" />
          <span className="text-center text-white">Subscribe</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
