"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

function SignUp() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start">
      <span className="text-default text-[32px] font-semibold">Sign Up</span>
      <div className="flex flex-col gap-y-4 mt-8">
        <span className="text-defaultBlack text-[16px] font-medium">
          Enter your email address. We use this details to verify your account.
        </span>

        <input
          type="email"
          placeholder="Email address"
          className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-5 rounded-xl"
        />
      </div>

      <div className="flex items-center flex-col gap-y-3 w-full">
        <Button
          title="Get Started"
          handleClick={() => router.push("/otp-verification")}
          btnStyle="bg-default w-full rounded-2xl  h-[60px] mt-10"
          textStyle="text-white"
        />
        <span className="text-[#111111]">
          Already Have an account?{" "}
          <span
            className="text-[#2B85FE] underline cursor-pointer"
            onClick={() => router.push("/sign-in")}
          >
            Sign In
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default SignUp;
