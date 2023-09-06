import React from "react";
import style from "./friendchat.module.css";
import Text from "../../Text";

const Friend = ({ messageCount, messageHighlight }) => {
  return (
    <div
      className={`${
        messageHighlight  && style.message__highlight 
      } ${style.friend__container}` }
    >
      <div className={style.friend__name}>
        <img src="/photos/moon.jpg" alt="" width={44} height={44} />
        <div className={style.friend__message}>
          <Text label={"Memoon Javed"} type={"h1"} />
          <Text label={"I hope this message find you"} type={"h2"} />
        </div>
      </div>
      <div className={style.friend__message__count}>
        <Text label={"9:01am"} type={"h6"} />
        {messageCount ? <span className={style.count}>{messageCount}</span> : ""}
      </div>
    </div>
  );
};

export default Friend;
