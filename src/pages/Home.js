import classes from "./Home.module.scss";
import { useState } from "react";
import Navbar from "../components/์Navbar/Navbar";
import Greeting from "../components/Greeting/Greeting";

const Home = () => {
  const [navMobileOverlay, setNavMobileOverlay] = useState(false);
  return (
    <div className={classes.container}>
      <Navbar
        navMobileOverlay={navMobileOverlay}
        setNavMobileOverlay={setNavMobileOverlay}
      />
      <Greeting />
      <div className={classes.sth}></div>
    </div>
  );
};

export default Home;
