import classes from "./Navbar.module.scss";
import DesktopNav from "./DesktopNav/DesktopNav";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [screenStatus, setScreenStatus] = useState(
    window.innerWidth < 450 ? "mobile" : "desktop"
  );
  const reportWindowSize = (e) => {
    console.log(e.target.innerWidth);
    if (e.target.innerWidth < 450) {
      setScreenStatus("mobile");
    } else {
      setScreenStatus("desktop");
    }
  };
  window.addEventListener("resize", reportWindowSize);

  useEffect(() => {
    console.log("Rerender");
  }, []);
  if (screenStatus === "desktop") {
    return <DesktopNav />;
  } else {
    return null;
  }
};

export default Navbar;
