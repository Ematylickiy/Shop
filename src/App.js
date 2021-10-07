import Slider from "./Components/Slider/Slider"
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar/>
          <Slider/>
        </div>
      </Switch>
    </Router>

  );
}


export default App;
