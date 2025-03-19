"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col w-full lg:w-full h-full">
        <div className="max-w-full">
          <Header />
        </div>
        <div
          className={`[@media(max-width:767px)]:scrollbar-hide p-10 flex-grow overflow-auto bg-[#FAFAFA] lg:pb-20 lg:w-full md:w-full sm:w-full lg:mt-0 mt-10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
