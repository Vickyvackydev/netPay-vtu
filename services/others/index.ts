import { API } from "@/config";

export const GetTransactions = async () => {
  const response = await API.get("/transaction");
  return response?.data?.data;
};
