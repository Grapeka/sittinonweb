import classes from "./DesktopNav.module.scss";
import { BsEmojiSmileFill } from "react-icons/bs";

const DesktopNav = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.brand}>
          <BsEmojiSmileFill className={classes.icon} />
          <h2>sittinon.</h2>
        </div>
        <div className={classes.menu}>
          <div className={classes.item}>
            <span>ABOUT</span>
          </div>
          <div className={classes.item}>
            <span>SKILLS</span>
          </div>
          <div className={classes.item}>
            <span>PROJECTS</span>
          </div>
          <div className={classes.item}>
            <span>EXP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
