import { useSelector } from "react-redux";
// import CatcherListItem from "../CatcherListItem/CatcherListItem";
export default function TotalCatchers() {
  const catcherListLength = useSelector((store) => store.catcherList);
  return <div>Total Catchers: {catcherListLength.length}</div>;
}
