import React, { useState } from "react";
import styles from "./friendchat.module.css";
import Text from "../../Text";
import { Tab, NavItem, Nav } from "react-bootstrap";
import Friend from "./Friend";
const FriendChat = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Initial active tab

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };
  return (
    <div className={styles.friend__chat__container}>
      <Text type={"h1"} label={"Message"} />
      <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
        <Nav variant="pills" className={styles["custom-pills"]}>
          <NavItem>
            <Nav.Link eventKey="1" className={styles["tab-link"]}>
              chats
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link eventKey="2" className={styles["tab-link"]}>
              Groups
            </Nav.Link>
          </NavItem>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="1">
            <Friend messageCount={5} messageHighlight={true} />
            <Friend />
            <Friend messageCount={5} messageHighlight={true} />
            <Friend messageCount={5} messageHighlight={true} />
            <Friend />
            <Friend messageCount={5} messageHighlight={true} />
          </Tab.Pane>
          <Tab.Pane eventKey="2">Content for Option 2</Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default FriendChat;
