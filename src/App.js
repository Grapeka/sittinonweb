import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [navMobileOverlay, setNavMobileOverlay] = useState(false);
  return (
    <div className="App">
      <Navbar
        navMobileOverlay={navMobileOverlay}
        setNavMobileOverlay={setNavMobileOverlay}
      />
      <Home />
    </div>
  );
}

export default App;
