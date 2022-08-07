import classes from "./Home.module.scss";
import { useState } from "react";
import Navbar from "../components/์Navbar/Navbar";

const Home = () => {
  const [navMobileOverlay, setNavMobileOverlay] = useState(false);
  return (
    <div className={classes.container}>
      <Navbar
        navMobileOverlay={navMobileOverlay}
        setNavMobileOverlay={setNavMobileOverlay}
      />
      <div className={classes.sth}></div>
    </div>
  );
};

export default Home;
