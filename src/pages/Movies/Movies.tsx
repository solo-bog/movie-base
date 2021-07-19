import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageSection from "../../components/PageSection/PageSection";

const Movies = () => {
  return (
    <>
      <PageHeader title="Movies" />
      <PageSection title="Popular" link="/movies/popular" />
      <PageSection title="Now Playing" link="/movies/now" />
      <PageSection title="Upcoming" link="/movies/upcoming" />
      <PageSection title="Top Rated" link="/movies/top-rated" />
    </>
  );
};

export default Movies;
