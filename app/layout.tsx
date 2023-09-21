import { ReactNode } from "react";
import Header from "../components/header-component/header-component";
import FooterComponent from "../components/footer-component/footer-component";
import "./globals.scss";
import { orbitron } from "@/app/fonts";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body  
        data-testid="layout"
        className=" font-orbitron bg-orange-50 flex flex-col min-h-screen px-4 py-4"
      >
        <Header />
        <main className="py-3 grow ">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
}
