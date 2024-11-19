import Navbar from "@components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe Tracker",
  description: "A simple recipe tracker app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-mono"
      >
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <p>&copy; 2024 Recipe Tracker</p>
        </footer>
      </body>
    </html>
  );
}
