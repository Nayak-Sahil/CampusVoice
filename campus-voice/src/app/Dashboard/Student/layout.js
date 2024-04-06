"use client";

import Navbar from "@/Components/dashboard/Navbar";
import Sidebar from "@/Components/dashboard/Sidebar";
import { QueryState } from "@/Contexts/QueryState";
import { SessionProvider } from "next-auth/react";
export default function DashboardLayout({ children,modal }) {
  return (
    <SessionProvider>
      <QueryState>
        {children}
        {modal}
      </QueryState>
    </SessionProvider>
  );
}