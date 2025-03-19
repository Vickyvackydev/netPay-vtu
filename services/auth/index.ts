import { API } from "@/config";
import { RegisterTypes } from "@/types";

export const RegisterUser = async (data: RegisterTypes) => {
  const response = await API.post("/register", data);
  return response.data;
};
export const VerifyOtp = async (data: {
  email: string | undefined;
  otp: string;
}) => {
  const response = await API.post("/verify_otp", data);
  return response.data;
};
export const ResendOtp = async (data: { email: string | undefined }) => {
  const response = await API.post("/resend_otp", data);
  return response.data;
};
export const LOGIN = async (data: {
  email_or_phone: string;
  password: string;
}) => {
  const response = await API.post("/login", data);
  return response.data;
};
