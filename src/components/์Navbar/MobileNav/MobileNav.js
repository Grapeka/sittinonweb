import classes from "./MobileNav.module.scss";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { BsEmojiSmileFill } from "react-icons/bs";

const MobileNav = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.brand}>
          <BsEmojiSmileFill className={classes.icon} />
          <h2>sittinon.</h2>
        </div>
        <div className={classes.dashDashDash}>
          <GoThreeBars
            onClick={() => {
              if (!props.pnavMobileOverlay) {
                props.setNavMobileOverlay(true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
