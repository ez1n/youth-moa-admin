"use client";

import "./globals.css";

import { ReactNode } from "react";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Header from "@/_components/common/Header";
import { Footer } from "@/_components/common/Footer";
import { usePathname } from "next/navigation";
import { tw } from "../../tailwindmerge.config";

export default function RootLayout({ children }: { children: ReactNode }) {
  const path = usePathname();
  const isLogin = !path.includes("/login");

  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {isLogin && <Header />}
          <div className="h-[100vh] flex flex-col">
            <main
              className={tw(
                "flex-1 flex justify-center items-center",
                isLogin ? "mt-20" : "mt-0"
              )}
            >
              {children}
            </main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
