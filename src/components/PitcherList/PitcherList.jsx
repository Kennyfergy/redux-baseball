import { useSelector } from "react-redux";
import PitcherListItem from "../PitcherListItem/PitcherListItem";

// this function maps over/loops through each pitcher from the store
export default function PitcherList({ setCurrentPitcher }) {
  const pitchList = useSelector((store) => store.pitcherList);

  return (
    <ul>
      {pitchList.map((pitcher, i) => (
        <PitcherListItem key={i} pitcher={pitcher} />
      ))}
    </ul>
  );
}
