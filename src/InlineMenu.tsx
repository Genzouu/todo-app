import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";
import "./InlineMenu.css";

interface InlineMenuProps {
  items: InlineMenuItem[];
}

interface InlineMenuItem {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  title: string;
  onClick: () => void;
}

function InlineMenu({ items }: InlineMenuProps) {
  return (
    <div className="inlineMenu">
      {/* <p>This is the menu</p> */}
      {items.map((item, index) => (
        <button
          className="inlineMenu-item"
          onClick={() => item.onClick()}
          key={index}
        >
          <item.Icon />
          <p>{item.title}</p>
        </button>
      ))}
    </div>
  );
}

export default InlineMenu;
