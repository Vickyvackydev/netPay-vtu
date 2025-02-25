import Logo from "@/components/logo";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        background: "url('./images/yellow-background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="flex items-center justify-center flex-col gap-y-6">
        <Logo size={200} />
        <div className="w-[641px] h-fit p-20 bg-white rounded-xl shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
