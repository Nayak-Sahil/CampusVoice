"use client";

import Navbar from "@/Components/dashboard/Navbar";
import Sidebar from "@/Components/dashboard/Sidebar";
import { SessionProvider } from "next-auth/react";
export default function DashboardLayout({ children,modal }) {
  return (
    <SessionProvider>
        {children}
        {modal}
    </SessionProvider>
  );
}