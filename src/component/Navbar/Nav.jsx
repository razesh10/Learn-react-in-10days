import React from "react";
import "./Nav.css";
import Button from "../Button/Button";
import { ReactComponent as ArrowIcon } from "../../asset/icons/arrow-right.svg";

function Nav() {
  return (
    <>
      <div className="nav-wrapper center">
        <div className="nav-elements equal-margin">
          <div className="logo">
            Razesh<span>.</span>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sevices</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <Button type="nav" btnLabel="Let's Talk" icon={<ArrowIcon />} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
