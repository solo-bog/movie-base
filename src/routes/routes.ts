import MainRouter from "../components/MainRouter/MainRouter";

const routes = [
  { path: "/movies/:id", Component: "Movie", exact: true },
  { path: "/", Component: MainRouter, exact: false },
];

export default routes;
