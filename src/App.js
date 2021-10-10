import Slider from "./Components/Slider/Slider"
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ComparisonPage from "./Components/ComparisonPage/ComparisonPage";
import DevicesList from "./Components/Devices/DevicesList";
import TemplatePageDevice from "./Components/Devices/TemplatePageDevice";


function App() {

  return (
    <Router>
          <Navbar />
      <Switch>
        <Route exact path="/"><Slider /></Route>

        <Route exact path="/smartphones"><DevicesList typeDevice = 'smartphones' /></Route>
        <Route exact path="/laptops"><DevicesList typeDevice = 'laptops' /></Route>
        <Route exact path="/gadgets"><DevicesList typeDevice = 'gadgets' /></Route>

        <Route path="/smartphones/:id">
          <TemplatePageDevice typeDevice='smartphones' typeScreen = 'OLED display'/>
        </Route>
        
        <Route path="/laptops/:id">
          <TemplatePageDevice typeDevice='laptops' typeScreen = "IPS" />
        </Route>

        <Route path="/gadgets/:id">
          <TemplatePageDevice typeDevice='gadgets' typeScreen = 'AMOLED' />
        </Route>

        <Route path="/compare"><ComparisonPage /></Route>
      </Switch>
    </Router>

  );
}


export default App;
