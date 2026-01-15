import { ThemeProvider } from "./theme-provider";
import HeaderWerapper from "./component/layout/HeaderWerapper";
import { AppSidebar } from "./component/layout/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
          <AppSidebar />
          <div className="flex flex-1 flex-col">          
            <HeaderWerapper />
            <main className="flex-1 p-4 lg:p-0 bg-gray-50 dark:bg-gray-900">
              {children}
            </main>

          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
