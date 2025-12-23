import HeaderWerapper from "./layout/HeaderWerapper";
import SidebarWerapper from "./layout/SidebarWerapper";




export default function deshbordLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
     <HeaderWerapper />
     <SidebarWerapper />
     
      <main>
        {children}
      </main>
    
    </>
  );
}