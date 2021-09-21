import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageGrid, { PageGridProps } from "../../components/PageGrid/PageGrid";
import { fetchData, selectPopular } from "../../features/people/peopleSlice";
import Pagination from "../../components/Pagination/Pagination";

const People: React.FC = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { popularPeople, totalPages, isLoading } = useSelector(selectPopular);
  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [currentPage, dispatch]);
  return (
    <>
      <PageHeader title="Popular People" />
      <PageGrid isLoading={isLoading} items={popularPeople} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default People;
