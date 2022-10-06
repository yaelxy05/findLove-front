import React from "react";

function Input({
  type,
  classNameLabel,
  classNameInput,
  value,
  groupName,
  manageChange,
  id,
  checked,
  nameId,
  nameLabel,
  placeholder
}) {
  return (
    <>
      <input
        type={type}
        name={groupName}
        className={classNameInput}
        id={id}
        value={value}
        checked={checked}
        onChange={manageChange}
        placeholder={placeholder}
      />
      <label className={classNameLabel} htmlFor={nameId}>
        {nameLabel}
      </label>
    </>
  );
}

export default Input;
