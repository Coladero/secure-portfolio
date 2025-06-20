import Footer from "./ui/Footer";
import React from "react";
import Navbar from "./Navbar";

// Crear src/components/Layout.tsx
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-terminal-background min-h-screen w-full overflow-y-auto flex flex-col">
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);
export default Layout;