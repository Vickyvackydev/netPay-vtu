"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

function UserDetails() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start">
      <span className="text-default text-[32px] font-semibold">About You</span>
      <div className="flex flex-col gap-y-4 mt-8 w-full">
        <input
          type="text"
          placeholder="first name"
          className=" border focus:outline-none w-full focus:border-default focus:shadow-custom p-5 rounded-xl"
        />

        <input
          type="text"
          placeholder="last name"
          className=" border focus:outline-none w-full focus:border-default focus:shadow-custom p-5 rounded-xl"
        />

        <input
          type="password"
          placeholder="password"
          className=" border focus:outline-none w-full focus:border-default focus:shadow-custom p-5 rounded-xl"
        />
        <input
          type="password"
          placeholder="confirm password"
          className=" border focus:outline-none w-full focus:border-default focus:shadow-custom p-5 rounded-xl"
        />
      </div>

      <Button
        title="Continue"
        handleClick={() => router.push("/dashboard")}
        btnStyle="bg-default w-full rounded-2xl  h-[60px] mt-10"
        textStyle="text-white"
      />
    </div>
  );
}

export default UserDetails;
