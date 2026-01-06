import { ThemeProvider } from "./theme-provider";
import HeaderWerapper from "./component/layout/HeaderWerapper";
import { AppSidebar } from "./component/layout/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function deshbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-gray-50/50 dark:bg-gray-900/50">
          
          {/* Sidebar */}
          <AppSidebar />

          {/* Main Content */}
          <div className="flex flex-1 flex-col">
            
            {/* Header */}
            <HeaderWerapper />

            {/* Page Content */}
            <main className="flex-1 p-4 lg:p-6">
              {children}
            </main>

          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
