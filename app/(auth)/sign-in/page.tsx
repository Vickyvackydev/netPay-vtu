"use client";
import Button from "@/components/button";
import { LOGIN } from "@/services/auth";
import { setToken, setUser } from "@/states/slices/authReducer";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email_or_phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    setLoading(true);

    const payload = {
      email_or_phone: form.email_or_phone,
      password: form.password,
    };

    try {
      const response = await LOGIN(payload);
      if (response) {
        toast.success(response?.message);
        dispatch(setUser(response?.data));
        router.replace("/dashboard");
        dispatch(setToken(response?.data?.token));
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-start">
        <span className="text-default text-lg font-semibold">Sign In</span>
        <span className="text-[16px] font-medium text-defaultBlack">
          Enter your credentials to continue
        </span>
      </div>
      <div className="flex flex-col gap-y-4 mt-8 w-full">
        <input
          type="email"
          name="email_or_phone"
          value={form.email_or_phone}
          onChange={handleInputChange}
          placeholder="Email address"
          className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-3 placeholder:text-sm rounded-xl"
        />
        <div className="flex flex-col gap-y-2 items-end">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-full border focus:outline-none focus:border-default focus:shadow-custom p-3 placeholder:text-sm rounded-xl"
          />
          <span
            onClick={() => router.push("/forgot-password")}
            className="text-sm cursor-pointer text-[#1A3EEC] font-medium"
          >
            Forgot password?
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-3 mt-5">
        <div className="w-[15px] h-[15px] rounded-md border" />
        <span className="text-sm font-medium text-defaultBlack">
          {" "}
          Keep me logged in
        </span>
      </div>

      <div className="flex items-center flex-col gap-y-3 w-full">
        <Button
          title="Continue"
          handleClick={handleLogin}
          loading={loading}
          disabled={loading}
          loaderColor="#ffffff"
          btnStyle="bg-default w-full rounded-2xl  h-[40px] mt-10 flex items-center justify-center"
          textStyle="text-white"
        />
        <span className="text-[#111111] text-sm">
          Don't have an account?{" "}
          <span
            className="text-[#2B85FE] underline cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Sign up
          </span>{" "}
        </span>
      </div>
    </div>
  );
}

export default SignIn;
