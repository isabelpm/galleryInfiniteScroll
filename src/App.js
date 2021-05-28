import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ImagesData from "./components/ImagesData";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <ImagesData />
        </Route>
      </Switch>
    </Router>
  )
}

export default App