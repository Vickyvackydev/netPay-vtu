"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

function ForgotPassword() {
  const handleclick = () => {};
  const router = useRouter();
  return (
    <div className="flex flex-col items-start">
      <span className="text-default text-[32px] font-semibold">
        Forgot Password?
      </span>
      <div className="flex flex-col gap-y-4 mt-8 w-full">
        <span className="text-defaultBlack text-[16px] font-medium">
          Enter your email to reset password.
        </span>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-5 rounded-xl"
        />
      </div>

      <div className="flex items-center flex-col gap-y-3 w-full">
        <Button
          title="Send"
          handleClick={() => router.push("/otp-verification")}
          btnStyle="bg-default w-full rounded-2xl  h-[60px] mt-10"
          textStyle="text-white"
        />
        <span className="text-[#111111]">
          Don't Have an account?{" "}
          <span
            className="text-[#2B85FE] underline cursor-pointer"
            onClick={() => router.push("/sign-up")}
          >
            Sign up
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default ForgotPassword;
