import React from "react";
import "./List.css";
import ListEntry from "./ListEntry";

function List() {
  return (
    <div className="list">
      <ListEntry title="Task 1" desc="This is a description" />
      <ListEntry title="Task 2" desc="This is a description" />
      <ListEntry title="Task 3" desc="This is a description" />
      <ListEntry title="Task 4" desc="This is a description" />
      <ListEntry title="Task 5" desc="This is a description" />
    </div>
  );
}

export default List;
