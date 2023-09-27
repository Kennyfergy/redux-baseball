import { useSelector } from "react-redux";

import CatcherListItem from "../CatcherListItem/CatcherListItem";

//This function will loop over each catcher in the catcherList
export default function CatcherList() {
  const catchList = useSelector((store) => store.catcherList);

  return (
    <ul>
      {catchList.map((catcher, i) => (
        <CatcherListItem key={i} catcher={catcher} />
      ))}
    </ul>
  );
}
