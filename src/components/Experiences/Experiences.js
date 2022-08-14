import classes from "./Experiences.module.scss";
import Wrapper from "../../UI/Wrapper/Wrapper";

import { useState } from "react";

const Experiences = () => {
  const [exp, setExp] = useState([
    {
      name: "GPSC young social innovator",
      role: "Participant",
      duration: "08/11/2019 - 11/11/2019",
      details: "Innovation",
      location: "Sirindhorn Science Home",
    },
    {
      name: "GoCoding",
      role: "Internship web developer",
      duration: "15/06/2021 - 16//08/2021",
      details: "Developing data visulization platform using Grafana platform",
      location: "Sukhumvit, Bangkok",
    },
    {
      name: "Future gruop",
      role: "Internship web developer",
      duration: "15/02/2021 - 16//04/2022",
      details: "Developing website using wordpress",
      location: "Online",
    },
  ]);
  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.head}>
          <span>experiences 🎈</span>
        </div>
        <div className={classes.content}>
          {exp.map((e, i) => {
            return (
              <div key={i} className={classes.anExp}>
                <div className={classes.primary}>
                  <div className={classes.coop}>
                    <span>{e.name}</span>
                  </div>
                  <div className={classes.date}>
                    <span>{e.duration}</span>
                  </div>
                </div>
                <div className={classes.sub}>
                  <div className={classes.role}>
                    <span>{e.role}</span>
                  </div>
                  <div className={classes.details}>
                    <span>{e.details}</span>
                  </div>
                  <div className={classes.location}>
                    <span>📍 {e.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Experiences;
