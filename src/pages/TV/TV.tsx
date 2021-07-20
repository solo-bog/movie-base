import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import {
  fetchData,
  selectAiringToday,
  selectOnTV,
  selectPopular,
  selectTopRated,
} from "../../features/tv/tvSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import PageSection from "../../components/PageSection/PageSection";

const Tv = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const popular = useAppSelector(selectPopular);
  const onTV = useAppSelector(selectOnTV);
  const airingToday = useAppSelector(selectAiringToday);
  const topRated = useAppSelector(selectTopRated);
  return (
    <>
      <PageHeader title="TV" />
      <PageSection title="Popular" link="/tv/popular" items={popular} />
      <PageSection title="On TV" link="/tv/on-tv" items={onTV} />
      <PageSection
        title="Airing Today"
        link="/tv/airing-today"
        items={airingToday}
      />
      <PageSection title="Top Rated" link="/tv/top-rated" items={topRated} />
    </>
  );
};

export default Tv;
