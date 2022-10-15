import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faCheck } from "@fortawesome/free-solid-svg-icons";

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
  placeholder,
  required,
  onBlur,
  errors,
  success
}) {
  const handleChange = (evt) => {
    manageChange(evt.target.value, groupName);
  };

  return (
    <>
      {errors && (
        <span className="icon_warning--input">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </span>
      )}
      {success && (
        <span className="icon_success--input">
        <FontAwesomeIcon icon={faCheck} />
      </span>
      )}

      <input
        type={type}
        name={groupName}
        className={classNameInput}
        id={id}
        value={value}
        checked={checked}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        onBlur={onBlur}
      />
      <label className={classNameLabel} htmlFor={nameId}>
        {nameLabel}
      </label>
    </>
  );
}

export default Input;
