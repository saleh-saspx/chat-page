import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    { path: "../public/fonts/IRANSansX-Regular.ttf", style: "normal" },
    { path: "../public/fonts/IRANSansXFaNum-Regular.ttf", style: "normal" },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={iranSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
