import Logo from "@/components/logo";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="flex items-center justify-center flex-col gap-y-6">
        <Logo size={150} />
        <div className="w-[450px] h-full p-10 bg-white rounded-2xl shadow-lg border border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
