import React, { MouseEventHandler, useState } from "react";
import "./ListEntry.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import InlineMenu from "./InlineMenu";
import { FlareSharp } from "@mui/icons-material";

interface ListEntryProps {
  title: string;
  desc: string;
  index: number;
}

function ListEntry({ title, desc, index }: ListEntryProps, callback: any) {
   const [expand, setExpand] = useState(false);
   const [menu, setMenu] = useState(false);

   document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
         setMenu(false);
      }
   });

  const manageMenuBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
      const menuIcon = (document.getElementsByClassName("menuIcon")[index] as HTMLButtonElement);
      if (menuIcon.parentElement !== (e.relatedTarget?.parentElement?.parentElement)) {
         setMenu(false); 
      } else {
         setTimeout(() => menuIcon.focus(), 1);
      }
  }

  return (
    <div className="listEntry">
      <div className="listEntry-header">
        <div className="listEntry-header-main">
          <button className="expandIcon" onClick={() => setExpand(!expand)}>
            {expand ? <ArrowDownwardIcon /> : <ArrowForwardIcon />}
          </button>
          <p>{title}</p>
        </div>
        <div className="listEntry-header-widgets">
          <button
            className="menuIcon"
            onClick={() => { setMenu(!menu);}}
            onBlur={(e) => manageMenuBlur(e)}
            onFocus={() => console.log("focused!")}
          >
            <MoreVertIcon />           
          </button>
          {menu && (
            <InlineMenu
              items={[
                {
                  Icon: EditIcon,
                  title: "Edit",
                  onClick: () => console.log("1"),
                },
                {
                  Icon: EditIcon,
                  title: "Duplicate",
                  onClick: () => console.log("2"),
                },
                {
                  Icon: EditIcon,
                  title: "Delete",
                  onClick: () => console.log("3"),
                },
              ]}
            />
          )}
        </div>
      </div>
      {expand && <div className="listEntry-body">{desc}</div>}
    </div>
  );
}

export default ListEntry;
