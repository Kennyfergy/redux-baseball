import { useSelector } from "react-redux";
export default function TotalCatchers() {
  const catcherListLength = useSelector((store) => store.catcherList);
  return <div>Total Catchers: {catcherListLength.length}</div>;
}
