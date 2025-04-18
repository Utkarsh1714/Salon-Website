import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"], // choose the weights you need
  style: ["normal", "italic"],
  variable: "--font-montserrat", // optional if you want to use CSS variable
});

export const metadata = {
  title: "Pooja Salon",
  description: "💇‍♀️ AI-Powered Salon Website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
