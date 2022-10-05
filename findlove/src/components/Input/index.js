import React from "react";

function Input({
  type,
  className,
  value,
  placeholder,
  name,
  manageChange,
  dataDescription,
  id,
  checked
}) {
  return (
    <>
      <input
        type={type}
        className={className}
        value={value}
        placeholder={placeholder}
        name={name}
        //onChange={manageChange}
        //dataDescription={dataDescription}
        id={id}
        checked={checked}
      />
    </>
  );
}

export default Input;
