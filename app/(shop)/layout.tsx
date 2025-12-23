import FooterWereaper from "./layout/FooterWereaper";
import HeaderWereaper from "./layout/HeaderWereaper";

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HeaderWereaper />
      <main>
        {children}
      </main>
      <FooterWereaper />
    </>
  );
}
