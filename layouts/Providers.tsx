"use client";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { persistor, Store } from "@/states/store";
import { queryClient } from "@/config";

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
