import Slider from "./Components/Slider/Slider"
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SmartphonesList from './Components/Smartphones/SmartphonesList'
import LaptopsList from './Components/Laptops/LaptopsList'
import GadgetsList from './Components/Gadgets/GadgetsList'
import PhonePage from "./Components/Smartphones/PhonePage";
import LaptopPage from "./Components/Laptops/LaptopPage";
import GadgetPage from "./Components/Gadgets/GadgetPage";

function App() {
  return (
    <Router>
          <Navbar />
      <Switch>
        <Route exact path="/">
          <Slider />
        </Route>
        <Route exact path="/smartphones"><SmartphonesList /></Route>
        <Route exact path="/laptops"><LaptopsList /></Route>
        <Route exact path="/gadgets"><GadgetsList /></Route>
        <Route path="/smartphones/:id"><PhonePage /></Route>
        <Route path="/laptops/:id"><LaptopPage /></Route>
        <Route path="/gadgets/:id"><GadgetPage /></Route>
      </Switch>
    </Router>

  );
}


export default App;
