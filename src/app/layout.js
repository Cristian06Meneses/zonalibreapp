import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./header";
import Footer from "./footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zona Libre Ferreteria | Todo lo que necesitas en tu hogar",
  description: "Todo lo que necesitas para construir tus sueños. Contáctanos al 3167408673 o 3167408029.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
