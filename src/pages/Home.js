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
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Greeting />
        <Spacer />
        <MySkills />
        <Projects />
        <Spacer />
        <Experiences />
        <Spacer />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
