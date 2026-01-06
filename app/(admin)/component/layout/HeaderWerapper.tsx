"use client";

import { SidebarTrigger } from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { 
  Bell, 
  Search, 
 
  LayoutDashboard, 
  IndianRupee, 
  Logs, 
  LibraryBig, 
  ShoppingBag, 
  Users,  
  FolderKanban, 
  CirclePile, 
  SquarePercent, 
  Newspaper, 
  Activity, 
  Megaphone, 
  MessageCircleWarning, 
  HandFist, 
  CloudBackup} from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";





// NOTE: Links ko aapke actual URL pattern ke hisaab se update kar diya hai
const sidebarLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/dashboard/Products", icon: FolderKanban },
  { name: "Orders", href: "/dashboard/orders", icon: ShoppingBag },
  { name: "Inventory", href: "/dashboard/Inventory", icon: CirclePile },
  { name: "Customers", href: "/dashboard/Customers", icon: Users },
  { name: "MediaLibrary", href: "/dashboard/MediaLibrary", icon: LibraryBig },
  { name: "CMS Blogs", href: "/dashboard/CMSBlogs", icon: Logs },
  { name: "Payments", href: "/dashboard/Payments", icon: IndianRupee },
  { name: "marketing", href: "/dashboard/Marketing", icon: SquarePercent },
  { name: "GSTInvoice", href: "/dashboard/GSTInvoice", icon: Newspaper },
  { name: "LogsActivity", href: "/dashboard/LogsActivity", icon: Activity },
  { name: "Notifications", href: "/dashboard/Notifications", icon: Megaphone },
  { name: "ReportsAnalytics", href: "/dashboard/ReportsAnalytics", icon: MessageCircleWarning },
  { name: "Support", href: "/dashboard/Support", icon: HandFist },
  { name: "Backup & Restore", href: "/dashboard/BackupRestore", icon: CloudBackup },
];







export default function HeaderWrapper() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // 👇 FIXED LOGIC: Ab ye sirf main shabd check karega (admin/dashboard ka confusion nahi hoga)
  const getPageTitle = (path: string) => {
    if (path.includes("/orders")) return "Orders";
    if (path.includes("/Customers")) return "Customers";
    if (path.includes("/Settings")) return "Settings";
    if (path.includes("/Products")) return "Products";
    if (path.includes("/Inventory")) return "Inventory";
    if (path.includes("/MediaLibrary")) return "Media Library";
    if (path.includes("/CMSBlogs")) return "CMS Blogs";
    if (path.includes("/Payments")) return "Payments";
    if (path.includes("/Marketing")) return "Marketing";
    if (path.includes("/GSTInvoice")) return "GST Invoice";
    if (path.includes("/LogsActivity")) return "Logs Activity";
    if (path.includes("/Notifications")) return "Notifications";
    if (path.includes("/ReportsAnalytics")) return "Reports & Analytics";
    if (path.includes("/Support")) return "Support";
    if (path.includes("/BackupRestore")) return "Backup & Restore";
    if (path.includes("/SystemSettings")) return "SystemSettings";
    if (path === "/dashboard" || path.includes("/dashboard")) return "Dashboard";

    return "dashboard"; // Agar kuch match na ho
  };







  const currentTitle = getPageTitle(pathname);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 shadow-sm">

      
       {/* sidebarwrepp icon */}

       <div>
        <SidebarTrigger className="mr-2" />
       </div>
      {/* 👇 DYNAMIC TITLE DISPLAY */}
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold md:text-xl">{currentTitle}</h1>
      </div>

      {/* Right Side Icons */}
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-64 rounded-lg bg-background pl-8 md:w-[300px]" />
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5" />
        </Button>

        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9 border">
                <AvatarImage src="/avatars/01.png" alt="@admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}