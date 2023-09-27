import { useState } from "react";

//this function takes each pitcher and displays them on a new list item
export default function PitcherListItem({ pitcher }) {
  const [currentPitcher, setCurrentPitcher] = useState("Maud Nelson");

  return <li onClick={() => setCurrentPitcher(pitcher)}>{pitcher}</li>;
}
