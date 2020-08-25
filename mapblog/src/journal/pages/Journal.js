import React from "react";

import JournalList from "../components/JournalList";

const Journal = () => {
  const JOURNAL = [
    /*{
      id: "j1",
      date: "aug 25",
      entry: "my first journal entry",
    }, */
  ];

  return <JournalList items={JOURNAL} />;
};

export default Journal;
