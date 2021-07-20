import React from "react";
import { Switch, Route } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import Movies from "../../pages/Movies/Movies";
import Tv from "../../pages/TV/TV";

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route exact path="/tv">
          <Tv />
        </Route>
        <Route path="/people">People</Route>
        <Route path="/profile">Profile</Route>
      </Switch>
      <MainNavigation />
    </div>
  );
};

export default MainRouter;
