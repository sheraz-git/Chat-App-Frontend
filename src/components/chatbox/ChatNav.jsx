import React from "react";
import style from "./chatbox.module.css";
import SearchIcon from "../../assets/svgs/SearchIcon";
import BellIcon from "../../assets/svgs/BellIcon";
import Input from "../Input";
import Notify from "../../assets/svgs/Notify";

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
      <div className={style.user__acc}>
        <div className={style.bell__icon}>
          <BellIcon />
          <span className={style.notify}>
            <Notify />
          </span>
        </div>
        <img
          src="/photos/moon.jpg"
          alt=""
          width={46}
          height={46}
          className={style.user__img}
        />
      </div>
    </div>
  );
};

export default ChatNav;
