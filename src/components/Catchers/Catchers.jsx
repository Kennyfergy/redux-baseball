import CatcherList from "../CatcherList/CatcherList";
import CatcherForm from "../CatcherListForm/CatcherListForm";

export default function Catchers() {
  return (
    <div>
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}
