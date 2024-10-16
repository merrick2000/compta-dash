import React from "react";
import Button from "./Button";

function CustomButton({ text }) {
  return (
    <Button
      text={text ?? "Enviar"}
      className="bg-[#DB3A34] pb-1 pt-1 text-white rounded-3xl"
    />
  );
}

export default CustomButton;
