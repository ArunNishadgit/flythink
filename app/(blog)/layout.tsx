import Navbar from "./layout/Navebar";
import FooterNav from "./layout/FooterNav";

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
        <Navbar />
      <main>
        {children}
      </main>
       <FooterNav />
    </>
  );
}