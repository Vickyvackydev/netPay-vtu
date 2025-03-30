"use client";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { persistor, Store } from "@/states/store";
import { queryClient } from "@/config";
import { useRouter } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  );
}

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { token } = Store.getState().auths;
  const router = useRouter();

  if (!token) {
    router.push("/sign-in");
  }

  return <>{children}</>;
};
