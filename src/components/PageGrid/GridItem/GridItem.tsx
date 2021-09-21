import React, { useState } from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Person } from "../../../features/people/types";

const GridItemImage = styled.img``;

const GridItemTitle = styled.div`
  color: #222222;
  font-weight: bold;
`;

const GridItemSubTitle = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export type GridItemProps = Person;

const GridItem: React.FC<GridItemProps> = ({ image, fullname, films }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div>
      {!isLoaded && <Skeleton height={352} />}
      <GridItemImage
        onLoad={() => setIsLoaded(true)}
        src={image}
        alt={fullname}
      />
      <GridItemTitle>{fullname}</GridItemTitle>
      <GridItemSubTitle>{films}</GridItemSubTitle>
    </div>
  );
};

export default GridItem;
