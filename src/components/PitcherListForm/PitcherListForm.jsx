import { useState } from "react";
import { useDispatch } from "react-redux";

//this function handles the input for new pitcher and adds to the store
export default function PitcherForm() {
  const [newPitcher, setNewPitcher] = useState("");
  const dispatch = useDispatch();

  const handlePitcherSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_PITCHER", payload: newPitcher });
    setNewPitcher("");
  };
  return (
    <form onSubmit={handlePitcherSubmit}>
      <input
        type="text"
        value={newPitcher}
        onChange={(event) => setNewPitcher(event.target.value)}
        placeholder="New Pitcher Name"
      />
      <button type="submit">Add Pitcher</button>
    </form>
  );
}
