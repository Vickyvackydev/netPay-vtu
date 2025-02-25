"use client";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

function OtpVerification() {
  const router = useRouter();

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState<number>(120); // 5 minutes in seconds
  const inputRefs = useRef<HTMLInputElement | null[]>([]);
  const [loading, setLoading] = useState(false);

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
  return (
    <div className="flex flex-col items-start">
      <span className="text-default text-[32px] font-semibold">
        OTP Verification
      </span>
      <div className="flex flex-col gap-y-4 mt-8">
        <span className="text-defaultBlack text-[16px] font-medium">
          Check your email or phone number for an OTP code
        </span>

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
                // @ts-ignore
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="h-12 w-12 rounded-lg border-2 border-gray-300 text-center text-xl focus:border-blue-500 focus:shadow-custom focus:outline-none"
              />
            ))}
          </div>

          <span className="text-defaultBlack">
            This code expires in{" "}
            <span className="text-[#008080]">{formattedTime}</span>
          </span>
        </div>
      </div>

      <Button
        title="Verify"
        handleClick={() => router.push("/user-details")}
        btnStyle="bg-default w-full rounded-2xl  h-[60px] mt-10"
        textStyle="text-white"
      />
    </div>
  );
}

export default OtpVerification;
