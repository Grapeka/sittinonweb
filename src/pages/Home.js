import classes from "./Home.module.scss";
import { useState } from "react";
import Navbar from "../components/์Navbar/Navbar";
import Greeting from "../components/Greeting/Greeting";
import Spacer from "../components/Spacer/Spacer";
import MySkills from "../components/MySkills/MySkills";
import Projects from "../components/Projects/Projects";
import Experiences from "../components/Experiences/Experiences";
import Footer from "../components/Footer/Footer";

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
      <Projects />
      <Spacer />
      <Experiences />
      <Spacer />
      <Footer />
      <div className={classes.sth}></div>
    </div>
  );
};

export default Home;
