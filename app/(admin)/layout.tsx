import { ThemeProvider } from "./theme-provider";
import HeaderWerapper from "./component/layout/HeaderWerapper";
import SidebarWerapper from "./component/layout/SidebarWerapper";




export default function deshbordLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <div className="min-h-screen w-full bg-gray-50/50 dark:bg-gray-900/50">
        <SidebarWerapper />
        <div className="flex flex-col lg:pl-64 transition-all duration-300">
          <HeaderWerapper />
          <main className="flex-1 p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
      </ThemeProvider>

    </>
  );
}



