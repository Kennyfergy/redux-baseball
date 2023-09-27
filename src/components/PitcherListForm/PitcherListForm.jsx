import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PitcherForm() {
  const [newPitcher, setNewPitcher] = useState("");
  const dispatch = useDispatch();

  // const handlePitcherNameChange = (event) => {
  //   setNewPitcher(event.target.value);
  // };

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
