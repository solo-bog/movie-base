import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import mainRoutes from "../../routes/mainRoutes";

const MainRouter: React.FC = () => {
  return (
    <>
      <Switch>
        {mainRoutes.map(({ path, exact, Component }) => (
          <Route
            path={path}
            exact={exact}
            key={path}
            render={() =>
              typeof Component === "string" ? Component : <Component />
            }
          />
        ))}
        <Redirect to={mainRoutes[0].path} />
      </Switch>
      <MainNavigation navItems={mainRoutes} />
    </>
  );
};

export default MainRouter;
