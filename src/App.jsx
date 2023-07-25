// import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/income" component={IncomePage} />
          <Route path="/expenses" component={ExpensePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
