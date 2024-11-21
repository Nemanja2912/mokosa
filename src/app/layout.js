import Navigation from "@/components/navigation/navigation";
import { rubik } from "./fonts";
import "./globals.css";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Mokoša - Dečija Igraonica | Kreativni centar za decu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} `}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
