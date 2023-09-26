import { useState } from "react";
import "./App.css";
import Catchers from "../Catchers/Catchers";

function App() {
  const [currentPitcher, setCurrentPitcher] = useState("Maud Nelson");
  const [currentCatcher, setCurrentCatcher] = useState("Elston Howard");

  const [pitcherList, setPitcherList] = useState([]);
  const [catcherList, setCatcherList] = useState([]);

  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <div>Total Pitchers: {pitcherList.length}</div>
      <div>Total Catchers: {catcherList.length}</div>
      <h3>All Pitchers</h3>

      <ul>
        {pitcherList.map((pitcher) => (
          <li onClick={() => setCurrentPitcher(pitcher)}>{pitcher}</li>
        ))}
      </ul>
      <Catchers />
    </div>
  );
}

export default App;
