import React, { useState } from "react";
import "../Header/Header.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineAlignLeft } from "react-icons/ai";

const Header = () => {
  const [menu, setMemu] = useState(false);
  return (
    <div className="Main">
      <div className="header">
        <div>
          <img
            className="image"
            src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/cricket-logo-maker/All-Star-Cricket-Team-Logo-Maker-for-Cricket-Teams.png"
            alt="new"
          />
        </div>
        <div className="middle-content">
          <ul className="middle-option">
            <p className="item-text">Live Scores</p>
            <p className="item-text">Schedule</p>
            <p className="item-text">Archives</p>
            <p className="item-text">News</p>
            <p className="item-text">Series</p>
            <p className="item-text">Teams</p>
            <p className="item-text">Videos</p>
            <p className="item-text">More</p>
            <p className="item-text">Rankings</p>
          </ul>
        </div>
        <div className="search">
          <BsSearch />
        </div>
        <AiOutlineAlignLeft className="menu" onClick={() => setMemu(!menu)}/>
        {menu && <div className="nav-mobile-view menu-visible">hello</div>}
      </div>
    </div>
  );
};

export default Header;
