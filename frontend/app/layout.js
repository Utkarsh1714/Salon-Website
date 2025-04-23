import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/ui/Navbar/Navbar";
import Footer from "@/ui/footer/Footer";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // choose the weights you need
  style: ["normal", "italic"],
  variable: "--font-montserrat", // optional if you want to use CSS variable
});

export const metadata = {
  title: "Pooja Salon",
  description: "💇‍♀️ AI-Powered Salon Website",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={montserrat.className}>
          <Navbar />
          <Toaster position="top-right" />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
