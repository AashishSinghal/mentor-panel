import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import SidePannel from "./Components/SidePannel/SidePannel";
import Viewport from "./Components/Viewport/Viewport";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Router>
          <SidePannel />
          <Viewport />
        </Router>
      </div>
    </div>
  );
}

export default App;
