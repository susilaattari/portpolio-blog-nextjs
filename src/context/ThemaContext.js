"use client";
import React from "react";
import { createContext, useReducer } from "react";
import reducer from "@/stateReducer/Reducer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ThemeContext = createContext();
export const initial = {
  count: 0,
  theme: "dark",
  name: "",
};
function ThemaProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  // const toggle = () => {
  //   dispatch({
  //     type: "themeValue",
  //   });
  // };
  return (
    <ThemeContext.Provider value={{ dispatch, state }}>
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
      <div className={`theme ${state.theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemaProvider;
