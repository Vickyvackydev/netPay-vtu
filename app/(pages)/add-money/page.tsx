"use client";
import Button from "@/components/button";
import { InitiatePayment, VerifyPayment } from "@/services/payment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

function AddMoney() {
  const [loading, setLoading] = useState({
    initiate: false,
    verify: false,
  });
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [paymentReference, setPaymentReference] = useState({
    access_code: "",
    authorization_url: "",
    reference: "",
  });
  const [showVerifyButton, setShowVerifyButton] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputAmount = e.target.value.replace(/\D/g, ""); // remove non-numeric values

    setAmount(inputAmount);
  };
  const handleInitiatePayment = async () => {
    setLoading({ ...loading, initiate: true });

    const payload = {
      payment_method: paymentMethod,
      amount: Number(amount),
    };

    try {
      const response = await InitiatePayment(payload);
      if (response) {
        toast.success(response?.message);
        setSuccess(true);
        const { access_code, authorization_url, reference } = response?.data;
        setPaymentReference({
          access_code: access_code,
          authorization_url: authorization_url,
          reference: reference,
        });
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading({ ...loading, initiate: false });
    }
  };

  const handleVerifyPayment = async () => {
    setLoading({ ...loading, verify: true });

    const payload = {
      payment_reference: paymentReference.reference,
    };

    try {
      const response = await VerifyPayment(payload);
      if (response) {
        toast.success(response?.message);
        window.history.replaceState({}, "", "/dashboard");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading({ ...loading, verify: false });
    }
  };

  const handleNextStep = () => {
    if (showVerifyButton) {
      handleVerifyPayment();
    } else {
      setShowVerifyButton(true);
      setTimeout(() => {
        window.open(paymentReference.authorization_url, "_blank");
      }, 1000);
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-6 items-start">
      <div className="flex flex-col items-start gap-y-3">
        <span className="text-[#111111] font-bold text-[32px]">Add Money</span>
        <span className="text-lg font-medium text-[#7D7D7D]">
          Fund your wallet easily with these steps
        </span>
        <div className="flex flex-col items-start gap-y-2 w-full">
          <span className="text-sm font-medium text-[#7D7D7D]">
            Input Amount
          </span>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00 NGN"
            className="w-full rounded-xl px-4 focus:border-default border h-[50px] border-[#E1E1E1] bg-transparent outline-none "
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <span className="text-sm font-medium text-customGray">
          Choose your preferred payment method
        </span>
        <div className="flex  items-center gap-x-3">
          <div
            onClick={() => setPaymentMethod("paystack")}
            className={`w-[334px] h-[169px] ${
              paymentMethod === "paystack" && "scale-105"
            } transition-all duration-300 cursor-pointer rounded-lg bg-default/20 p-5 flex flex-col justify-between items-start`}
          >
            <Image
              src={"/images/paystack.svg"}
              width={20}
              height={20}
              alt="paystack image"
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-semibold text-[#008080]">
                Paystack
              </span>
              <Image
                src={"/images/right-arrow.svg"}
                width={20}
                height={20}
                alt="arrow"
              />
            </div>
          </div>
          <div
            onClick={() => setPaymentMethod("flutterwave")}
            className={`w-[334px] h-[169px] ${
              paymentMethod === "flutterwave" && "scale-105"
            } transition-all duration-300 cursor-pointer rounded-lg bg-default/20 p-5 flex flex-col justify-between items-start`}
          >
            <Image
              src={"/images/flutterwave.svg"}
              width={20}
              height={20}
              alt="paystack image"
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-[16px] font-semibold text-[#008080]">
                Flutterwave
              </span>
              <Image
                src={"/images/right-arrow.svg"}
                width={20}
                height={20}
                alt="arrow"
              />
            </div>
          </div>
        </div>
        {success ? (
          <div className="flex justify-center items-center">
            <Button
              loaderColor="#ffffff"
              loading={loading.verify}
              disabled={loading.verify}
              btnStyle="flex w-[440px] mt-5 h-[40px] rounded-lg items-center justify-center bg-default/80"
              title={`${
                showVerifyButton ? "Verify" : "Proceed to make payment"
              }`}
              textStyle="text-white"
              handleClick={handleNextStep}
            />
          </div>
        ) : (
          <>
            {paymentMethod && (
              <div className="flex justify-center items-center">
                <Button
                  loading={loading.initiate}
                  loaderColor="#ffffff"
                  disabled={loading.initiate || !amount.trim()}
                  btnStyle="flex w-[440px] mt-5 h-[40px] rounded-lg items-center justify-center bg-default/80"
                  title="Proceed"
                  textStyle="text-white"
                  handleClick={handleInitiatePayment}
                />
              </div>
            )}
          </>
        )}
        {/* {showVerifyButton && (
          <div className="flex justify-center items-center">
            <Button
              loading={loading.verify}
              loaderColor="#ffffff"
              btnStyle="flex w-[440px] mt-5 h-[40px] rounded-lg items-center justify-center bg-default/80"
              title="Verify"
              textStyle="text-white"
              handleClick={handleVerifyPayment}
            />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default AddMoney;
