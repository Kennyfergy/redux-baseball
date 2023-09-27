import CatcherList from "../CatcherList/CatcherList";
import CatcherForm from "../CatcherListForm/CatcherListForm";

// this function takes the catcherForm and catcherList and organizes them into just Catchers
export default function Catchers() {
  return (
    <div>
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  );
}
