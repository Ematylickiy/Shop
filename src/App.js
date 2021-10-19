import Slider from "./Components/Slider/Slider"
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {HashRouter as Router, Switch, Route} from "react-router-dom";
import ComparisonPage from "./Components/ComparisonPage/ComparisonPage";
import DevicesList from "./Components/Devices/DevicesList";
import TemplatePageDevice from "./Components/Devices/TemplatePageDevice";
import CartPageList from "./Components/Cart/CartPageList";


function App() {

  return (
    <Router basename="/Shop">
          <Navbar />
      <Switch>
        <Route exact path="/"><Slider /></Route>

        <Route exact path="/smartphones"><DevicesList typeDevice='smartphones' /></Route>
        <Route exact path="/computers"><DevicesList typeDevice = 'computers' /></Route>
        <Route exact path="/gadgets"><DevicesList typeDevice = 'gadgets' /></Route>

        <Route path="/smartphones/:id">
          <TemplatePageDevice typeDevice='smartphones'/>
        </Route>
        
        <Route path="/computers/:id">
          <TemplatePageDevice typeDevice='computers' />
        </Route>

        <Route path="/gadgets/:id">
          <TemplatePageDevice typeDevice='gadgets' />
        </Route>

        <Route path="/compare"><ComparisonPage /></Route>
        <Route path="/basket"><CartPageList /></Route>
      </Switch>
    </Router>

  );
}


export default App;
