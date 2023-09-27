import { useSelector } from "react-redux";

//this function grabs the catcherList from the store and displays in a div, the length of catcherList
export default function TotalCatchers() {
  const catcherListLength = useSelector((store) => store.catcherList);
  return <div>Total Catchers: {catcherListLength.length}</div>;
}
