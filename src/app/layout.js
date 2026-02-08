import { Outfit, Inter, Orbitron } from "next/font/google";
import "./globals.css";
import StarField from '@/components/StarField';
import ShootingStars from '@/components/ShootingStars';
import ScrollProgress from '@/components/ScrollProgress';

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-cool",
  display: "swap",
});

export const metadata = {
  title: "Soorya Selvakumar | Portfolio",
  description: "Portfolio of Soorya Selvakumar - AI & Computer Science Graduate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} ${orbitron.variable}`}>
        <ScrollProgress />
        <div className="bg-grid" />
        <StarField />
        <ShootingStars />
        {children}
      </body>
    </html>
  );
}
