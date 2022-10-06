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
      />
      <label className={classNameLabel} htmlFor={nameId}>
        {nameLabel}
      </label>
    </>
  );
}

export default Input;
