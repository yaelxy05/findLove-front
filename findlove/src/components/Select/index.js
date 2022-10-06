import React from "react";

function Select({
  type,
  classNameLabel,
  classNameSelect,
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
      <select
        type={type}
        name={groupName}
        className={classNameSelect}
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

export default Select;
