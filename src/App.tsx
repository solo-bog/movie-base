import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Switch>
        {routes.map(({ path, exact, Component }) => (
          <Route path={path} exact={exact} key={path}>
            {Component}
          </Route>
        ))}
      </Switch>
    </ErrorBoundary>
  );
};

export default App;
