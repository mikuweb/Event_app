import { Footer } from "@/src/components/footer/footer";
import { Header } from "@/src/components/header/header";
import { MainLayout } from "@/src/components/layout/main-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
