"use client";

import { SessionProvider } from "next-auth/react";
export default function DashboardLayout({ children,modal }) {
  return (
    <SessionProvider>
        {children}
        {modal}
    </SessionProvider>
  );
}