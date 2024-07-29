import React from "react";
import Navbar from "../Navbar";

const index = ({ children }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="sticky">
        <Navbar />
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
};

export default index;
