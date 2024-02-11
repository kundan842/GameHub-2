import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools/build/lib/devtools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <QueryClientProvider client={queryClient}>
        {" "}
        <RouterProvider router={router} />
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
