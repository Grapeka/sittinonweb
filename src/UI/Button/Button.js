import classes from "./Button.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Button = (props) => {
  return (
    <div
      className={classes.button}
      onClick={() => {
        console.log(props.link);
      }}
    >
      <div className={classes.box}>
        <div className={classes.content}>
          <div className={classes.text}>{props.text}</div>
          <div className={classes.arrow}>
            <HiOutlineArrowNarrowRight className={classes.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
