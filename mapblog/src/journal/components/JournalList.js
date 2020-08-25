import React from "react";

const JournalList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2> no entry's found </h2>
      </div>
    );
  }
  /*
  return (
    <ul>
      {props.items.map((journ) => (
        <JournalItem
          key={journ.id}
          id={journ.id}
          entry={journ.entry}
          date={journ.date}
        />
      ))}
    </ul>
  );*/
};

export default JournalList;
