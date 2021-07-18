import React from "react";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/movies">
          Movies
        </Route>
        <Route exact path="/tv">
          TV
        </Route>
        <Route path="/people">People</Route>
        <Route path="/profile">Profile</Route>
      </Switch>
      <MainNavigation />
    </div>
  );
};

export default MainRouter;
