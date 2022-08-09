import classes from "./Wrapper.module.scss";

const Wrapper = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Wrapper;
