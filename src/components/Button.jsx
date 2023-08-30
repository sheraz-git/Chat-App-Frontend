import React from "react";
import GoogleSvg from "../assets/svgs/GoogleSvg";

const Button = ({ variant, label, svgIcon,type,onClick}) => {
  switch (variant) {
    case "primary":
      return (
        <button className="primary" >
          {svgIcon}
          {label}
        </button>
      );
    case "secondary":
      return <button className="secondary"  type={type}  onClick={onClick}>{label}</button>;
    default:
      return <button className="secondary"  type={type} onClick={onClick}>{label}</button>;
  }
};

export default Button;
