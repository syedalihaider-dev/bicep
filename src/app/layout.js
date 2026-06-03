import { Asta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalAnimations from "@/components/animations/GlobalAnimations";

const astaSans = Asta_Sans({
  subsets: ["latin"],
  variable: "--font-asta-sans",
});

export const metadata = {
  title: "Bicep | Best in Class Engineering Partner",
  description: "Bicep | Best in Class Engineering Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={astaSans.variable}>
      <body>
        <BootstrapClient />
        <GlobalAnimations />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
