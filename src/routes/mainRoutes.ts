import Movies from "../pages/Movies/Movies";
import Tv from "../pages/TV/TV";
import { MoviesIcon, PeopleIcon, ProfileIcon, TVIcon } from "../assets";
import People from "../pages/People/People";

const mainRoutes = [
  {
    path: "/movies",
    Component: Movies,
    exact: true,
    Icon: MoviesIcon,
    name: "Movies",
  },
  { path: "/tv", Component: Tv, exact: true, Icon: TVIcon, name: "TV" },
  {
    path: "/people",
    Component: People,
    exact: true,
    Icon: PeopleIcon,
    name: "People",
  },
  {
    path: "/profile",
    Component: "Profile",
    exact: true,
    Icon: ProfileIcon,
    name: "Profile",
  },
];
export default mainRoutes;
