"use client";
import { Footer, Navbar } from "@/Components";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemaProvider from "@/context/ThemaContext";
import AuthProvider from "@/Components/AuthProvider";

export default function LayoutContext({ children }) {
  return (
    <html>
      <body cz-shortcut-listen="true">
     <AuthProvider>

          <ThemaProvider>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              // closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
            <div>
              <div className="container">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemaProvider>
              </AuthProvider>
      </body>
    </html>
  );
}
