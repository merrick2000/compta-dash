import React from "react";

function RedStatusMark({ display = true }) {
  return (
    <span
      className={`inline-block w-4 h-4  rounded-full  ${
        !display ? "bg-white" : "bg-[#DB3A34]"
      }`}
    ></span>
  );
}

export default RedStatusMark;
