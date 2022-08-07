import classes from "./Navbar.module.scss";
import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";
import MobileNavOverlay from "./MobileNav/MobileNavOverlay/MobileNavOverlay";
import { useState, useEffect } from "react";

const Navbar = (props) => {
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
  } else if (screenStatus === "mobile") {
    return (
      <>
        <MobileNav
          navMobileOverlay={props.navMobileOverlay}
          setNavMobileOverlay={props.setNavMobileOverlay}
        />
        {props.navMobileOverlay ? (
          <MobileNavOverlay
            navMobileOverlay={props.navMobileOverlay}
            setNavMobileOverlay={props.setNavMobileOverlay}
          />
        ) : null}
      </>
    );
  }
};

export default Navbar;
