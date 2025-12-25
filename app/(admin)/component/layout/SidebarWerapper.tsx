"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SystemSettings from "../../dashboard/SystemSettings/page";
import { LayoutDashboard, ShoppingBag, Users, Settings, LogOut } from "lucide-react";

// 👇 IMPORTANT: Links ko URL ke hisaab se update kiya hai
const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/Products", icon: Settings },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Inventory", href: "/dashboard/Inventory", icon: Settings },
  { name: "Customers", href: "/dashboard/Customers", icon: Users },
  { name: "MediaLibrary", href: "/dashboard/MediaLibrary", icon: Users },
  { name: "CMS Blogs", href: "/dashboard/CMSBlogs", icon: Settings },
  { name: "Payments", href: "/dashboard/Payments", icon: Settings },
  { name: "marketing", href: "/dashboard/Marketing", icon: Settings },
  { name: "GSTInvoice", href: "/dashboard/GSTInvoice", icon: Settings },
  { name: "LogsActivity", href: "/dashboard/LogsActivity", icon: Settings },
  { name: "Notifications", href: "/dashboard/Notifications", icon: Settings },
  { name: "ReportsAnalytics", href: "/dashboard/ReportsAnalytics", icon: Settings },
  { name: "Support", href: "/dashboard/Support", icon: Settings },
  { name: "Backup & Restore", href: "/dashboard/BackupRestore", icon: Users },
];






export default function SidebarWrapper() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-64 flex-col fixed left-0 top-0 border-r bg-gray-100/40 dark:bg-gray-800/40 z-40">

      {/* Logo Area */}
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <span className="text-xl font-bold">FlyThink Admin</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-4 text-sm font-medium">
          {sidebarLinks.map((link) => {
            // Check agar URL match karta hai toh highlight karein
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                  isActive
                    ? "bg-muted text-primary font-bold" // Active Style
                    : "text-muted-foreground hover:bg-gray-100 dark:hover:bg-gray-800" // Inactive Style
                )}
              >
                <link.icon className="h-4 w-4" />
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* admin action buttons */}
      <div className="mt-auto p-4 border-t">
  <Button
    asChild
    variant="ghost"
    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
  >
    <Link
      href="/dashboard/SystemSettings"
      className="flex items-center gap-2"
    >
      <Settings className="h-4 w-4" />
      <span>SystemSettings</span>
    </Link>
  </Button>
</div>
    </aside>
  );
}