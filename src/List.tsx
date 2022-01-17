import React from "react";
import "./List.css";
import ListEntry from "./ListEntry";

function List() {
  return (
    <div className="list">
         {[0, 1, 2, 3, 4].map((index: number) => (
            <ListEntry title={"Task " + (index + 1)} desc="This is a description" index={index} key={index} />
         ))}
    </div>
  );
}

export default List;
