import classes from "./MobileNavOverlay.module.scss";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileNavOverlay = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.page}>
          <div className={classes.box}>
            <div className={classes.content}>
              <div className={classes.menu}>
                <div className={classes.item}>
                  <span className={classes.link}>ABOUT</span>
                </div>
                <div className={classes.item}>
                  <span className={classes.link}>SKILLS</span>
                </div>
                <div className={classes.item}>
                  <span className={classes.link}>PROJECTS</span>
                </div>
                <div className={classes.item}>
                  <span className={classes.link}>EXP</span>
                </div>
              </div>
              <div className={classes.quit}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className={classes.icon}
                  onClick={() => {
                    props.setNavMobileOverlay(false);
                  }}
                />
              </div>
            </div>
          </div>
        </div>,
        document.getElementById("mobileNavOverlay")
      )}
    </>
  );
};

export default MobileNavOverlay;
