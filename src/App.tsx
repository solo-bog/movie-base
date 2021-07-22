import React from "react";
import { Route, Switch } from "react-router-dom";
import MainRouter from "./components/MainRouter/MainRouter";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Switch>
        <Route path="/movies/:id">Movie</Route>
        <Route path="/">
          <MainRouter />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
