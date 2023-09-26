import { useSelector } from "react-redux";

import CatcherListItem from "../CatcherListItem/CatcherListItem";

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
