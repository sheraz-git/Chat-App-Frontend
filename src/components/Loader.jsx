import React from "react";
import Button from "./Button";

const Loader = ({onClick}) => {
  return (
    <div className="loader_page">
      <div className="loader__container">
        <span className="loader"></span>
        <div className="resend__btn">
          <Button type={"secondary"} label={"Resend Email"} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
