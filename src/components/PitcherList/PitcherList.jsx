import { useSelector } from "react-redux";
import PitcherListItem from "../PitcherListItem/PitcherListItem";

export default function PitcherList() {
  const pitchList = useSelector((store) => store.pitcherList);

  return (
    <ul>
      {pitchList.map((pitcher, i) => (
        <PitcherListItem key={i} pitcher={pitcher} />
      ))}
    </ul>
  );
}
