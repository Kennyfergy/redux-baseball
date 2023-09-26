import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CatcherForm() {
  const [newCatcher, setNewCatcher] = useState("");
  const dispatch = useDispatch();

  //   const handleCatcherNameChange = (event) => {
  //     setNewCatcher(event.target.value);
  //   };

  const handleCatcherSubmit = (event) => {
    event.preventDefault();
    // spread: give me everything in CatcherList, then add this new thing
    // setCatcherList([...catcherList, newCatcher]); don't need because reducer
    dispatch({ type: "ADD_CATCHER", payload: newCatcher });
    setNewCatcher("");
  };
  return (
    <form onSubmit={handleCatcherSubmit}>
      <input
        type="text"
        value={newCatcher}
        onChange={(event) => setNewCatcher(event.target.value)}
        placeholder="New Catcher Names"
      />
      <button type="submit">Add Catcher</button>
    </form>
  );
}
// was in onChange: handleCatcherNameChange
