import React from "react";
import style from "./stories.module.css";
import Story from "./Story";
import AddStory from "../../../assets/svgs/AddStory";
import Text from "../../Text";

const Stories = () => {
  return (
    <div className={style.story__container}>
      <span className={style.story__title}>Stories</span>

      <div className={style.stories}>
        <div className={style.add__story}>
          <AddStory />
          <Text type={"h2"} label={"My Story"} />
        </div>
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
};

export default Stories;
