import PitcherList from "../PitcherList/PitcherList";
import PitcherForm from "../PitcherListForm/PitcherListForm";
import PitcherListForm from "../PitcherListForm/PitcherListForm";

export default function Pitchers() {
  return (
    <div>
      <h3>All Pitchers</h3>
      <PitcherListForm />
      <PitcherList />
    </div>
  );
}
