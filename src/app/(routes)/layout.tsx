import React from "react";
import DashboardProvider from "@/app/(routes)/provider";

export default function Layout({
  children
}: { children: React.ReactNode }) {
  return <DashboardProvider>{children}</DashboardProvider>;
}
