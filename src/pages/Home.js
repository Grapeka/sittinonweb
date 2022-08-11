import classes from "./Home.module.scss";
import { useState } from "react";
import Navbar from "../components/์Navbar/Navbar";
import Greeting from "../components/Greeting/Greeting";
import Spacer from "../components/Spacer/Spacer";
import MySkills from "../components/MySkills/MySkills";

const Home = () => {
  const [navMobileOverlay, setNavMobileOverlay] = useState(false);
  return (
    <div className={classes.container}>
      <Navbar
        navMobileOverlay={navMobileOverlay}
        setNavMobileOverlay={setNavMobileOverlay}
      />
      <Greeting />
      <Spacer />
      <MySkills />
      <div className={classes.sth}></div>
    </div>
  );
};

export default Home;
