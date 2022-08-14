import classes from "./Projects.module.scss";
import { useState } from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import tech from "../../data/tech";

const Projects = () => {
  const styling = (e) => {
    if (e === "javascript") {
      return { border: "1px blue solid" };
    } else if (e === "python" || e === "css") {
      return "blue";
    } else if (e === "html" || e === "sq;") {
      return "orange";
    } else if (e === "react js" || e === "next js") {
      return "purple";
    } else if (e === "react native" || e === "node js") {
      return "green";
    } else if (e === "nosql") {
      return "red";
    }
  };
  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      img: "https://interio.si/wp-content/uploads/2020/09/Interio-Living.jpg",
      tools: ["react js", "node js", "nosql"],
      status: "finished",
      date: { date: 5, month: "April", year: 2022 },
    },
    {
      name: "Project 2",
      img: "https://interio.si/wp-content/uploads/2020/09/Interio-Living.jpg",
      tools: ["react js", "golang", "nosql"],
      status: "on going",
      date: null,
    },
    {
      name: "Project 3",
      img: "https://interio.si/wp-content/uploads/2020/09/Interio-Living.jpg",
      tools: ["react native", "node js", "sql"],
      status: "on going",
      date: null,
    },
  ]);

  return (
    <Wrapper>
      <div className={classes.container}>
        <span className={classes.head}>projects 🌟</span>
        <div className={classes.content}>
          {projects.map((e, i) => {
            return (
              <div className={classes.aProject}>
                <div className={classes.box}>
                  <div className={classes.overlay}></div>
                  <img className={classes.img} src={e.img} alt="" />
                  <div className={classes.banner}>
                    <span className={classes.name}>{e.name}</span>
                    <div className={classes.tools}>
                      {e.tools.map((e, i) => {
                        return (
                          <div
                            className={classes.aTool}
                            style={{
                              border: `1px solid ${tech.matchColor(e)}`,
                            }}
                          >
                            <span>{e}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={classes.bottom}>
                      <div className={classes.status}>{e.status}</div>
                      {e.date != null ? (
                        <div className={classes.date}>
                          {e.date.month +
                            " " +
                            e.date.date +
                            ", " +
                            e.date.year}
                        </div>
                      ) : null}
                    </div>
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

export default Projects;
