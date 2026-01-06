"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  IndianRupee,
  Logs,
  LibraryBig,
  ShoppingBag,
  Users,
  Settings,
  FolderKanban,
  CirclePile,
  SquarePercent,
  Newspaper,
  Activity,
  Megaphone,
  MessageCircleWarning,
  HandFist,
  CloudBackup,
} from "lucide-react"

const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/Products", icon: FolderKanban },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Inventory", href: "/dashboard/Inventory", icon: CirclePile },
  { name: "Customers", href: "/dashboard/Customers", icon: Users },
  { name: "MediaLibrary", href: "/dashboard/MediaLibrary", icon: LibraryBig },
  { name: "CMS Blogs", href: "/dashboard/CMSBlogs", icon: Logs },
  { name: "Payments", href: "/dashboard/Payments", icon: IndianRupee },
  { name: "Marketing", href: "/dashboard/Marketing", icon: SquarePercent },
  { name: "GSTInvoice", href: "/dashboard/GSTInvoice", icon: Newspaper },
  { name: "LogsActivity", href: "/dashboard/LogsActivity", icon: Activity },
  { name: "Notifications", href: "/dashboard/Notifications", icon: Megaphone },
  { name: "ReportsAnalytics", href: "/dashboard/ReportsAnalytics", icon: MessageCircleWarning },
  { name: "Support", href: "/dashboard/Support", icon: HandFist },
  { name: "Backup & Restore", href: "/dashboard/BackupRestore", icon: CloudBackup },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible="icon" className="border-r">

      {/* 🔷 LOGO / HEADER */}
      <SidebarHeader className="h-16 flex items-center px-4">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Image
            src="/Flythink_logo.png"
            alt="Admin Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>
      </SidebarHeader>

      {/* 🔷 MENU */}
      <SidebarContent>
        <SidebarMenu>
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3",
                      isActive && "font-semibold"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* 🔷 FOOTER / SETTINGS */}
      <SidebarFooter className="border-t p-2">
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
        >
          <Link href="/dashboard/SystemSettings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>System Settings</span>
          </Link>
        </Button>
      </SidebarFooter>

    </Sidebar>
  )
}
