"use client";

import { PropsWithChildren } from "react";

import {
  QueryClientProvider,
  QueryCache,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ReactQueryProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <QueryClientProvider client={defaultQueryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;

const defaultQueryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      console.log("error:", error);
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
    mutations: {
      onError: (error: any) => {
        console.log("error:", error);
      },
    },
  },
});
