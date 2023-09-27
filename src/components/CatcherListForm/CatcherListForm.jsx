import { useState } from "react";
import { useDispatch } from "react-redux";

// this function handles the input form for a new catcher
export default function CatcherForm() {
  const [newCatcher, setNewCatcher] = useState("");
  const dispatch = useDispatch();

  const handleCatcherSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CATCHER", payload: newCatcher });
    setNewCatcher("");
  };
  return (
    <form onSubmit={handleCatcherSubmit}>
      <input
        required
        type="text"
        value={newCatcher}
        onChange={(event) => setNewCatcher(event.target.value)}
        placeholder="New Catcher Names"
      />
      <button type="submit">Add Catcher</button>
    </form>
  );
}
