"use client";
import Button from "@/components/button";
import { ResendOtp, VerifyOtp } from "@/services/auth";
import { selectUser } from "@/states/slices/authReducer";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function OtpVerification() {
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState<number>(300); // 5 minutes in seconds
  const inputRefs = useRef<HTMLInputElement | null[]>([]);
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState({
    verifying: false,
    resending: false,
  });
  React.useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (
    element: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // if (isNaN(Number(element.target.value))) return;

    const newOtp = [...otp];
    newOtp[index] = element.target.value;
    setOtp(newOtp);

    if (element.target.value && index < otp.length - 1) {
      // @ts-ignore
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        // @ts-ignore
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const formattedTime = `${Math.floor(timer / 60)}:${String(
    timer % 60
  ).padStart(2, "0")}`;

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");

    if (/^[A-Za-z0-9]+$/.test(pastedData) && pastedData.length <= length) {
      const characters = pastedData.split("");
      setOtp(characters);
      characters.forEach((_, index) => {
        // @ts-ignore
        inputRefs?.current[index]?.focus();
      });
    }
  };

  const handleVerifyOtp = async () => {
    setLoading({ ...loading, verifying: true });
    const payload = {
      email: user?.email,
      otp: otp.join(""),
    };

    try {
      const response = await VerifyOtp(payload);
      if (response) {
        toast.success(response?.message);
        router.replace("/sign-in");
        setOtp([]);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading({ ...loading, verifying: false });
    }
  };
  const handleResendOtp = async () => {
    setLoading({ ...loading, resending: true });
    const payload = {
      email: user?.email,
    };

    try {
      const response = await ResendOtp(payload);
      if (response) {
        toast.success(response?.message);
        setTimer(300);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading({ ...loading, resending: false });
    }
  };
  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col items-start">
        <span className="text-default text-16 font-semibold">
          OTP Verification
        </span>
        <span className="text-defaultBlack text-sm font-medium">
          Check your email or phone number for an OTP code
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-y-2 items-start">
        <div className="flex items-center justify-center gap-x-3">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              // @ts-ignore
              ref={(ref) => (inputRefs.current[index] = ref)}
              className="h-10 w-10 rounded-lg border-2 border-gray-300 text-center text-xl focus:border-blue-500 focus:shadow-custom focus:outline-none"
            />
          ))}
        </div>

        <span className="text-defaultBlack text-sm">
          This code expires in{" "}
          <span className="text-[#008080]">{formattedTime}</span>{" "}
          {timer === 0 && (
            <button
              className="text-default text-sm font-medium"
              onClick={handleResendOtp}
            >
              {loading.resending ? "please wait..." : "Resend"}
            </button>
          )}
        </span>
      </div>

      <Button
        title="Verify"
        loading={loading.verifying}
        handleClick={handleVerifyOtp}
        disabled={loading.verifying}
        loaderColor="#ffffff"
        btnStyle="bg-default w-full rounded-2xl  h-[40px] mt-10 flex items-center justify-center"
        textStyle="text-white"
      />
    </div>
  );
}

export default OtpVerification;
