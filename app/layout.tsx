import Footer from "./components/Footer";
import "./globals.css";
import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Interactive rating component",
  description: "Created by George Chang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={overpass.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
