import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageSection from "../../components/PageSection/PageSection";
import {
  fetchData,
  selectNowPlaying,
  selectPopular,
  selectTopRated,
  selectUpcomig,
} from "../../features/movies/moviesSlice";

const Movies: React.FC = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopular);
  const upcoming = useSelector(selectUpcomig);
  const nowPlaying = useSelector(selectNowPlaying);
  const topRated = useSelector(selectTopRated);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <PageHeader title="Movies" />
      <PageSection title="Popular" link="/movies/popular" items={popular} />
      <PageSection title="Now Playing" link="/movies/now" items={nowPlaying} />
      <PageSection title="Upcoming" link="/movies/upcoming" items={upcoming} />
      <PageSection
        title="Top Rated"
        link="/movies/top-rated"
        items={topRated}
      />
    </>
  );
};

export default Movies;
