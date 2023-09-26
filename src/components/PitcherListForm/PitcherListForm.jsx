import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PitcherForm() {
  const [newPitcher, setNewPitcher] = useState("");
  const dispatch = useDispatch();

  const handlePitcherNameChange = (event) => {
    setNewPitcher(event.target.value);
  };

  const handlePitcherSubmit = (event) => {
    event.preventDefault();
    // spread: give me everything in pitcherList, then add this new thing
    // setPitcherList([...pitcherList, newPitcher]); don't need because reducer
    dispatch({ type: "SET_PITCHER_LIST", payload: newPitcher });
    setNewPitcher("");
  };
  return (
    <form onSubmit={handlePitcherSubmit}>
      <input
        type="text"
        value={newPitcher}
        onChange={handlePitcherNameChange}
        placeholder="New Pitcher Name"
      />
      <button type="submit">Add Pitcher</button>
    </form>
  );
}
