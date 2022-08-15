import classes from "./Footer.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { GrFacebook } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.emailBox}>
            <div className={classes.head}>Email Address</div>
            <div className={classes.sub}>chotwilaiwan@gmail.com</div>
          </div>
          <div className={classes.socialBox}>
            <div className={classes.social}>
              <BsGithub className={classes.icon} />
            </div>
            <div className={classes.social}>
              <BsLinkedin className={classes.icon} />
            </div>
            <div className={classes.social}>
              <GrFacebook className={classes.icon} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
