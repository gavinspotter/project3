import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition>
      <aside className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
