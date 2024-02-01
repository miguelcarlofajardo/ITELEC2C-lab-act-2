import React from "react";
import "./Menu.css";
import Content from "./Content";
import contentData from "./ContentData";

function Menu() {
  return (
    <div className="menu">
      {contentData.map((content, index) => (
        <Content key={index} contentObj={content} />
      ))}
    </div>
  );
}

export default Menu;
