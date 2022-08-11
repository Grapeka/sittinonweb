import classes from "./MySkills.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { useState } from "react";

const MySkills = () => {
  const [skills, setSkills] = useState([
    "Javascript",
    "Python",
    "HTML",
    "CSS",
    "React JS",
    "React native",
    "Next JS",
    "Node JS",
    "NoSQL",
    "SQL",
    "Git",
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
