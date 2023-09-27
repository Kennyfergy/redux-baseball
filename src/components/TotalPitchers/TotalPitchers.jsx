import { useSelector } from "react-redux";

///this function grabs the pitcherList from the store and displays in a div, the length of pitcherList

export default function TotalPitchers() {
  const PitcherListLength = useSelector((store) => store.pitcherList);

  return <div>Total Pitchers: {PitcherListLength.length}</div>;
}
