import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type CarouselItemProps = {
  id: number;
  title: string;
  poster: string | undefined;
  rating: number;
  year: number;
};

const StyledCard = styled.div`
  position: relative;
  min-width: 140px;
  margin-right: 20px;
`;

const StyledCardImg = styled.img`
  border-radius: 6px;
  -webkit-box-shadow: 0px 8px 13px -5px rgba(34, 60, 80, 0.6);
  -moz-box-shadow: 0px 8px 13px -5px rgba(34, 60, 80, 0.6);
  box-shadow: 0px 8px 13px -5px rgba(34, 60, 80, 0.6);
`;

const StyledCardName = styled.div`
  padding: 10px 0;
  font-weight: bold;
  color: #222222;
  text-align: center;
  text-transform: uppercase;
`;

const StyledCardRating = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  background-image: linear-gradient(147deg, #f99f00 0%, #db3069 95%);
  border-radius: 20px;
`;

const CarouselItem: React.FC<CarouselItemProps> = ({
  id,
  title,
  poster,
  rating,
  year,
}) => {
  return (
    <StyledCard>
      <Link to={`/movies/${id}`}>
        <StyledCardImg alt={title} src={poster} />
        <StyledCardName>
          {title}({year})
        </StyledCardName>
        <StyledCardRating>{rating}</StyledCardRating>
      </Link>
    </StyledCard>
  );
};

export default CarouselItem;
