"use client";
import Button from "@/components/button";
import { RegisterUser } from "@/services/auth";
import { setUser } from "@/states/slices/authReducer";
import { RegisterTypes } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";

function Register() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState<RegisterTypes>({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    setLoading(true);

    const payload: RegisterTypes = {
      full_name: formInput.full_name,
      email: formInput.email,
      phone: formInput.phone,
      password: formInput.password,
      password_confirmation: formInput.password_confirmation,
    };

    try {
      const response = await RegisterUser(payload);
      if (response) {
        toast.success(response?.message);
        dispatch(setUser(response?.data));
        setFormInput({
          full_name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: "",
        });
        router.replace("/otp-verification");
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
        <span className="text-default text-lg font-semibold">Sign up</span>
        <span className="text-[16px] font-medium text-defaultBlack">
          Get started by creating an account
        </span>
      </div>
      <div className="flex flex-col gap-y-4 mt-8 w-full">
        <input
          type="text"
          name="full_name"
          value={formInput.full_name}
          onChange={handleChange}
          placeholder="Full name"
          className=" border focus:outline-none placeholder:text-sm w-full focus:border-default focus:shadow-custom p-3 rounded-xl"
        />

        <input
          type="email"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          placeholder="Email"
          className=" border focus:outline-none w-full placeholder:text-sm focus:border-default focus:shadow-custom p-3 rounded-xl"
        />
        <input
          type="tel"
          name="phone"
          value={formInput.phone}
          onChange={handleChange}
          placeholder="Phone number"
          className=" border focus:outline-none w-full placeholder:text-sm focus:border-default focus:shadow-custom p-3 rounded-xl"
        />

        <div className="w-full flex flex-col items-start relative">
          <input
            type={showPassword.password ? "text" : "password"}
            name="password"
            value={formInput.password}
            onChange={handleChange}
            placeholder="Password"
            className=" border focus:outline-none w-full placeholder:text-sm focus:border-default focus:shadow-custom p-3 rounded-xl"
          />
          {showPassword.password ? (
            <FaEyeSlash
              className="absolute right-5 top-4 cursor-pointer text-defaultBlack"
              onClick={() =>
                setShowPassword({ ...showPassword, password: false })
              }
            />
          ) : (
            <FaEye
              className="absolute right-5 top-4 cursor-pointer text-defaultBlack"
              onClick={() =>
                setShowPassword({ ...showPassword, password: true })
              }
            />
          )}
          {formInput.password && !passwordPattern.test(formInput.password) && (
            <span className="text-xs font-normal text-red-500">
              {" "}
              Password must contain uppercase, lowercase, a number, and a
              special character.
            </span>
          )}
        </div>
        <div className="w-full flex flex-col items-start relative">
          <input
            type={showPassword.confirmPassword ? "text" : "password"}
            name="password_confirmation"
            value={formInput.password_confirmation}
            onChange={handleChange}
            placeholder="Confirm password"
            className=" border focus:outline-none w-full placeholder:text-sm focus:border-default focus:shadow-custom p-3 rounded-xl"
          />
          {showPassword.confirmPassword ? (
            <FaEyeSlash
              className="absolute right-5 top-4 cursor-pointer text-defaultBlack"
              onClick={() =>
                setShowPassword({ ...showPassword, confirmPassword: false })
              }
            />
          ) : (
            <FaEye
              className="absolute right-5 top-4 cursor-pointer text-defaultBlack"
              onClick={() =>
                setShowPassword({ ...showPassword, confirmPassword: true })
              }
            />
          )}
          {formInput.password_confirmation &&
            formInput.password_confirmation !== formInput.password && (
              <span className="text-xs font-normal text-red-500">
                {" "}
                Password must be the same
              </span>
            )}
        </div>
      </div>

      <Button
        title="Continue"
        loading={loading}
        disabled={loading}
        loaderColor="#ffffff"
        handleClick={handleRegister}
        btnStyle="bg-default w-full rounded-2xl  h-[40px] mt-10 flex items-center justify-center"
        textStyle="text-white"
      />
    </div>
  );
}

export default Register;
