import React, { useState } from "react";
import plusicon from "../../assets/plus-icon.png";
import "./Sidebar.css";
function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sidebar">
      <img
        src={plusicon}
        alt="Add"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      <ul className={`sidebar_list ${toggle ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            className="sidebar_list_item"
            key={index}
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
