import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1 className="py-3 text-7xl font-bold opacity-75">Our Works</h1>
      {children}
    </div>
  );
}

export default layout;
