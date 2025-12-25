"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Bell, Search, Menu, LayoutDashboard, ShoppingBag, Users, Settings } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";





// NOTE: Links ko aapke actual URL pattern ke hisaab se update kar diya hai
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

      {/* Mobile Toggle Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden shrink-0">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col w-64 p-0">
          <div className="flex h-16 items-center border-b px-6">
            <Link href="#" className="flex items-center gap-2 font-semibold">
              <span>FlyThink Admin</span>
            </Link>
          </div>
          <nav className="grid gap-2 text-lg font-medium p-4">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground",
                    isActive ? "bg-muted text-foreground" : "text-muted-foreground"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </SheetContent>
      </Sheet>

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