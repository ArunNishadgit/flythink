import HeaderWerapper from "./component/layout/HeaderWerapper";
import SidebarWerapper from "./component/layout/SidebarWerapper";




export default function deshbordLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
     <div className="min-h-screen w-full bg-gray-50/50 dark:bg-gray-900/50">
      
      {/* 1. Sidebar (Apne aap Fixed hai) */}
      <SidebarWerapper />

      {/* 2. Right Side Area (Header + Main Content) */}
      {/* lg:pl-64 ka matlab: Desktop pe poora content 256px right khisak jayega taaki sidebar na chupe */}
      <div className="flex flex-col lg:pl-64 transition-all duration-300">
        
        {/* Header */}
        <HeaderWerapper />

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-6">
          {children}
        </main>
        
      </div>

    </div>
    
    </>
  );
}



