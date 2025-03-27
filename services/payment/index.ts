import { API } from "@/config";

export const InitiatePayment = async (data: {
  payment_method: string | null;
  amount: number;
}) => {
  const response = await API.post("/initiate_payment", data);
  return response.data;
};
export const VerifyPayment = async (data: { payment_reference: string }) => {
  const response = await API.post("/verify_payment", data);
  return response.data;
};
export const GetWalletBalance = async () => {
  const response = await API.get("/get_wallet_balance");
  return response?.data?.data;
};
