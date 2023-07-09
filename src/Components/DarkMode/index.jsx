import React from "react";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemaContext";
export default function DarkMode() {
  const { state, dispatch } = useContext(ThemeContext);
  return (
    <div
      className="flex relative justify-center cursor-pointer items-center border w-[42px] h-[24] rounded-lg px-[5px]"
      onClick={() =>
        dispatch({
          type: "themeValue",
        })
      }>
      <div className="text-sm">🌙</div>
      <div className="text-sm">🔆</div>
      <div
        className={
          state.theme === "dark"
            ? "left-[2px] absolute bg-emerald-400 rounded-lg w-[16px] h-[16px]"
            : "right-[2px] absolute rounded-lg w-[15px] h-[15px] bg-emerald-400"
        }
      />
    </div>
  );
}
