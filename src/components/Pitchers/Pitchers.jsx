import PitcherList from "../PitcherList/PitcherList";
import PitcherForm from "../PitcherListForm/PitcherListForm";
import PitcherListForm from "../PitcherListForm/PitcherListForm";

//this function takes pitcherList and the pitcherForm and moves them into one component with a header
export default function Pitchers() {
  return (
    <div>
      <h3>All Pitchers</h3>
      <PitcherListForm />
      <PitcherList />
    </div>
  );
}
