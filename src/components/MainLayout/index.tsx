import Link from "next/link";
import React from "react";
import headerLinks from "@static/headerLinks";

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <header
        className="flex tablet:justify-center mobile:justify-end align-center h-16 p-5"
        style={{ backgroundColor: "black" }}>
        <div className="mobile:hidden tablet:flex align-center gap-10 text-white">
          {headerLinks.map(item => (
            <Link key={item.id} href={item.href} className="hover:text-yellow-400">
              {item.name}
            </Link>
          ))}
        </div>
        <button className="tablet:hidden mobile:inline text-white">Menu</button>
      </header>
      <div className="min-h-screen">{children}</div>
      <footer
        className="flex h-80"
        style={{ backgroundColor: "black" }}></footer>
    </>
  );
};

export default MainLayout;
