import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Navmenu from "@/components/navbar/Navmenu";
import TopNav from "@/components/navbar/topNav";
import Footer from "./footer/page";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <Navbar />
        <Navmenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
