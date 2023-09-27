import { useSelector } from "react-redux";

export default function TotalPitchers() {
  const PitcherListLength = useSelector((store) => store.pitcherList);

  return <div>Total Pitchers: {PitcherListLength.length}</div>;
}
