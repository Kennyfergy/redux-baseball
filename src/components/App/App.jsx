import { useState } from "react";
import "./App.css";
import Pitchers from "../Pitchers/Pitchers";
import Catchers from "../Catchers/Catchers";
import TotalCatchers from "../TotalCatchers/TotalCatchers";
import TotalPitchers from "../TotalPitchers/TotalPitchers";

function App() {
  const [currentPitcher, setCurrentPitcher] = useState("Maud Nelson");
  const [currentCatcher, setCurrentCatcher] = useState("Elston Howard");

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <TotalPitchers />
      <TotalCatchers />

      <Pitchers />
      <Catchers />
    </div>
  );
}

export default App;
