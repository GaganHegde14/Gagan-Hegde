"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { visitorAPI } from "@/services/api";

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  // Record visitor when page changes
  useEffect(() => {
    const recordVisit = async () => {
      try {
        await visitorAPI.record({ page: pathname });
      } catch (error) {
        console.error("Error recording visit:", error);
      }
    };

    recordVisit();
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
