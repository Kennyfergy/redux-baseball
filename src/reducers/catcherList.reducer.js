export default function catcherList(
  state = ["Roy Campanella", "Elston Howard", "Kenji Jojima"],
  action
) {
  switch (action.type) {
    case "SET_CATCHER_LIST":
      return [];
    case "ADD_CATCHER":
      return [...state, action.payload];
    default:
      return state;
  }
}
