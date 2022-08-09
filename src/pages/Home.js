import classes from "./Home.module.scss";
import { useState } from "react";
import Navbar from "../components/์Navbar/Navbar";
import Greeting from "../components/Greeting/Greeting";
import Spacer from "../components/Spacer/Spacer";

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
      <div className={classes.sth}></div>
    </div>
  );
};

export default Home;
