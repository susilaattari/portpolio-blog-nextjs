"use client";
import { Footer, Navbar } from "@/Components";
import "./globals.css";
// import { Inter, Roboto_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemaProvider from "@/context/ThemaContext";

// const roboto_mono = Roboto_Mono({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto-mono",
// });
export default function LayoutContext({ children }) {
  return (
    <html>
      <body cz-shortcut-listen="true">
        <ThemaProvider>
          <ToastContainer
            position="top-center"
            autoClose={50}
            hideProgressBar={false}
            newestOnTop={false}
            // closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemaProvider>
      </body>
    </html>
  );
}
