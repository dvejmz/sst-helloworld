import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import Nav from "@/components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <div className="flex justify-center mt-52">
        <Nav />
        <Component {...pageProps} />
      </div>
    </ClerkProvider>
)}
