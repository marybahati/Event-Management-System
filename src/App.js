import React from "react";
import AddEvent from "./components/AddEvent";
import { ViewAllEvents } from "./components/ViewAllEvents";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/create-event" component={AddEvent}></Route>
        <Route exact path="/view-events" component={ViewAllEvents}></Route>
      </div>
    </Router> 
  );
}

export default App;
