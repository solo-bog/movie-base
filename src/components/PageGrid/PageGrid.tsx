import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import GridItem, { GridItemProps } from "./GridItem/GridItem";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 0 20px;
  grid-template-columns: repeat(auto-fill, 235px);
  justify-content: space-around;
`;

export type PageGridProps = {
  items: GridItemProps[];
  isLoading: boolean;
};

const PageGrid: React.FC<PageGridProps> = ({ items, isLoading }) => {
  return (
    <Grid>
      {items.map((item) =>
        isLoading ? (
          <div key={item.fullname}>
            <Skeleton height={352} />
            <Skeleton count={2} />
          </div>
        ) : (
          <GridItem
            key={item.fullname}
            image={item.image}
            fullname={item.fullname}
            films={item.films}
          />
        )
      )}
    </Grid>
  );
};

export default PageGrid;
