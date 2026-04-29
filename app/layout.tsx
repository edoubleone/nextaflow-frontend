import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./queryProvider";
// @ts-ignore
import "react-toastify/dist/ReactToastify.css";
// @ts-ignore
import "./globals.css";
import Preloader from "./components/preloader";
import Script from "next/script";

const inter = Inter({
  variable: "--inter ",
  subsets: ["latin"],
  weight: ["200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NextaFlow-free trial",
  description:
    "NextaFlow is an all-in-one CRM and automation platform designed to help businesses grow ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="69f1e465191334cd704961cc"
      />

      <body className={`${inter.variable} antialiased`}>
        <Preloader duration={2000}>
          <QueryProvider>
            {children}
            <ToastContainer
              limit={1}
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </QueryProvider>
        </Preloader>
      </body>
    </html>
  );
}
