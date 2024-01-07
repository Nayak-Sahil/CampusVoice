"use client";

import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}