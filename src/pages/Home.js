import classes from "./Home.module.scss";
import Navbar from "../components/์Navbar/Navbar";

const Home = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.sth}></div>
    </div>
  );
};

export default Home;
