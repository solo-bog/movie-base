import React from "react";
import { Route, Switch } from "react-router-dom";
import MainRouter from "./components/MainRouter/MainRouter";

function App() {
  return (
    <Switch>
      <Route path="/movies/:id">Movie</Route>
      <Route path="/">
        <MainRouter />
      </Route>
    </Switch>
  );
}

export default App;
