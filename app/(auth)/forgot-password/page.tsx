"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

function ForgotPassword() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-start">
        <span className="text-default text-lg font-semibold">
          Forgot Password?
        </span>
        <span className="text-defaultBlack text-xs font-medium">
          Worry not!, kindly enter your email to update your password
        </span>
      </div>
      <div className="flex flex-col gap-y-4 mt-8 w-full">
        <span className="text-defaultBlack text-sm font-medium">
          Enter your email to reset password.
        </span>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-3 placeholder:text-sm rounded-xl"
        />
      </div>

      <div className="flex items-center flex-col gap-y-3 w-full">
        <Button
          title="Send"
          handleClick={() => router.push("/otp-verification")}
          btnStyle="bg-default w-full rounded-2xl  h-[40px] mt-10"
          textStyle="text-white"
        />
        <span className="text-[#111111] text-sm">
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
