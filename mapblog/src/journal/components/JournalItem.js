import React from "react";

const JournalItem = (props) => {
  return (
    <li>
      <div>
        <div>{props.entry}</div>
        <div>{props.date}</div>
      </div>
    </li>
  );
};

export default JournalItem;
