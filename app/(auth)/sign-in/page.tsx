"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

function SignIn() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start">
      <span className="text-default text-[32px] font-semibold">Sign In</span>
      <div className="flex flex-col gap-y-4 mt-8 w-full">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-5 rounded-xl"
        />
        <div className="flex flex-col gap-y-2 items-end">
          <input
            type="password"
            placeholder="Email password"
            className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-5 rounded-xl"
          />
          <span className="text-[16px] cursor-pointer text-[#1A3EEC] font-medium">
            Forgot password?
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-3 mt-5">
        <div className="w-[25px] h-[25px] rounded-md border" />
        <span className="text-[16px] font-medium text-defaultBlack">
          {" "}
          Keep me logged in
        </span>
      </div>

      <div className="flex items-center flex-col gap-y-3 w-full">
        <Button
          title="Continue"
          handleClick={() => router.push("/otp-verification")}
          btnStyle="bg-default w-full rounded-2xl  h-[60px] mt-10"
          textStyle="text-white"
        />
        <span className="text-[#111111]">
          Don't have an account?{" "}
          <span
            className="text-[#2B85FE] underline cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Sign up
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default SignIn;
