import { Link } from "react-router-dom";
import Header from "./Components/Header";
import RoutesIndex from "./routes/RoutesIndex";
import './App.css';
import './sytles/Header.scss'
function App() {
  return (
    <div className="App">
     
      <RoutesIndex />
    </div>
  );
}

export default App;
