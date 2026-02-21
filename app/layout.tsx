import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import QueryProvider from "./queryProvider";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Preloader from "./components/preloader";


const inter = Inter({
  variable: "--inter ",
  subsets: ["latin"],
  weight: ["200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NextaFlow-Marketing",
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
      <script 
        src="https://widgets.leadconnectorhq.com/loader.js"  
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="699861eb6e60097dd7229cfd"   > 
        </script>
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
