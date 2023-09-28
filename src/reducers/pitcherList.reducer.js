export default function pitcherList(
  state = ["Maud Nelson", "Ila Borders", "Don Newcombe", "CC Sabathia"],
  action
) {
  switch (action.type) {
    case "SET_PITCHER_LIST":
      return [];
    case "ADD_PITCHER":
      return [...state, action.payload];
    default:
      return state;
  }
}
