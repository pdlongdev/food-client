import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import Topbar from "./components/Topbar";
import Home from "./page/Home";
import Detail from "./page/Detail";

function App() {
  return (
    <Router>
      <div className="App container-fruid">
        <header>
          <Topbar />
        </header>
      </div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/:slug">
        <Detail />
      </Route>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
