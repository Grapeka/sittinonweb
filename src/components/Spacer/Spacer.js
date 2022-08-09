import classes from "./Spacer.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";

const Spacer = () => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.spacer}></div>
      </div>
    </Wrapper>
  );
};

export default Spacer;
