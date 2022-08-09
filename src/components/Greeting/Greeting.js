import classes from "./Greeting.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
import Button from "../../UI/Button/Button";
import avatar from "../../assets/sittinon.webp";
const Greeting = () => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.avatar}>
            <div className={classes.imgBox}>
              <img src={avatar} className={classes.img} alt="" />
            </div>
          </div>
          <div className={classes.text}>
            <div className={classes.firstGreet}>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <div className={classes.mid}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              consequuntur accusamus quia quae soluta totam ipsum. Ipsam
              consequuntur accusamus quia quae soluta totam ipsum.
            </div>
            <div className={classes.last}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              consequuntur accusamus quia quae soluta totam ipsum. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <Button text={"My github"} link={"www.google.com"} />
      </div>
    </Wrapper>
  );
};

export default Greeting;
