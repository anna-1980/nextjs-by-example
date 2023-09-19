import { ReactNode } from "react";
import Header from "../components/header-component/header-component";
import FooterComponent from "../components/footer-component/footer-component";
import "./globals.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen px-4 py-4">
        <header>
          <Header />
        </header>
        <main  className="py-3 grow">{children}</main>
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
