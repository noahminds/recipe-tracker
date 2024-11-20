import Navbar from "@components/layout/navbar";
import Footer from "./components/layout/footer";
import type { Metadata } from "next";
import "./globals.css";
import RecipeContextProvider from "@components/recipeContext";

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
      <body className="font-mono">
        <header>
          <Navbar />
        </header>
        <RecipeContextProvider>
          {children}
        </RecipeContextProvider>
        <Footer />
      </body>
    </html>
  );
}
