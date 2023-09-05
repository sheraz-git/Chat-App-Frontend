import React from "react";
import style from "./chatbox.module.css";
import SearchIcon from "../../assets/svgs/SearchIcon";
import Input from "../Input";

const ChatNav = () => {
  return (
    <div className={style.chat__nav}>
      <div className={style.logo}>
        <img src="/photos/logo.png" alt="" width={54} height={54} />
      </div>
      <div className={style.search__container}>
        <div className={style.search__border}>
          <SearchIcon />
          <Input
            type={"h2"}
            placeholder={"Search for people, document and more"}
            styleClass={style.search__input}
          />
        </div>
      </div>
      <div className={style.user__acc}>user acc</div>
    </div>
  );
};

export default ChatNav;
