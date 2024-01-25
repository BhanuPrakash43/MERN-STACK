import Accordian from "./components/Accordian";
import { accordians } from "./data/accordians";
// useState
// useEffect
function App() {
  return (
    <div>
      <Accordian accordians={accordians} />
    </div>
  );
}
export default App;