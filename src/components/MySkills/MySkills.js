import classes from "./MySkills.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { useState } from "react";

const MySkills = () => {
  const [skills, setSkills] = useState([
    "javascript",
    "python",
    "html",
    "css",
    "react js",
    "react native",
    "noded js",
    "next js",
    "nosql",
    "sql",
    "git",
  ]);
  return (
    <Wrapper>
      <div className={classes.content}>
        <h2 className={classes.head}>my skills 🎨</h2>
        <div className={classes.skillSet}>
          {skills.map((e, i) => {
            return (
              <div className={classes.aSkill}>
                <span>{e}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default MySkills;
