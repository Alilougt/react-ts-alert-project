import "./App.css";
import Alerts from "./components/ui/Alert/Alerts";
import { BellRing } from "lucide-react";

function App() {
  return (
    <>
      <Alerts type="alert-danger" icon={<BellRing />} title="Alert Title" />
    </>
  );
}

export default App;
