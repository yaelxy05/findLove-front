import React from "react";

function Input({ type, className, value, placeholder, name, manageChange }) {
  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={manageChange}
      />
    </>
  );
}

export default Input;
