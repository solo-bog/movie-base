import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 0 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
`;

const GridItem = styled.div`
  background-color: aqua;
  border: 1px solid red;
  height: 100px;
`;

const GridItemTitle = styled.div`
  color: #222222;
  font-weight: bold;
`;

const GridItemSubTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PageGrid = () => {
  return (
    <Grid>
      <GridItem>
        <img
          src="https://image.tmdb.org/t/p/w500/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg"
          alt="Tom Krus"
        />
        <GridItemTitle>Tom Krus</GridItemTitle>
        <GridItemSubTitle>
          Film 1, Film 2,Film 1, Film 2Film 1, Film 2
        </GridItemSubTitle>
      </GridItem>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
    </Grid>
  );
};

export default PageGrid;
