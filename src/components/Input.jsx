import React from "react";

const Input = ({ type, placeholder, styleClass, onChange,name,value }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={styleClass}
        onChange={onChange}
        name={name}
        value={value}
      />
    </>
  );
};

export default Input;
