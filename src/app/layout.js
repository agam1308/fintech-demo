import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "FinTechDemo - The Future of Financial Technology",
  description: "Secure, scalable, and intelligent financial solutions designed for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
