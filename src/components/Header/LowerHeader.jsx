import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import classes from "./Header.module.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul className={classes.left_container}>
        <li>
          <GiHamburgerMenu />
          <p>All</p>
        </li>
        <li>
          Medical Care
          <MdOutlineArrowDropDown />
        </li>
        <li>
          Groceries
          <MdOutlineArrowDropDown />
        </li>
        <li> Best Sellers</li>
        <li> Amazon Basics</li>
        <li> New Releases</li>
        <li> Music</li>
        <li>
          Prime
          <MdOutlineArrowDropDown />
        </li>
      </ul>
      <ul className={classes.right_container}>
        <li> Customer Service</li>
        <li> Today's Deals</li>
        <li> Customer Service</li>
        <li> Registry</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
