import React from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem/CarouselItem";
import { Movie } from "../../../features/movies/types";

const CarouselContainer = styled.div`
  display: flex;
  padding: 20px 0;
  overflow-x: scroll;
  overflow-y: hidden;
`;

type ElementsCarouselProps = {
  items: Movie[];
};

const ElementsCarousel = ({ items }: ElementsCarouselProps) => {
  return (
    <CarouselContainer>
      {items.map((item) => (
        <CarouselItem
          key={item.id}
          id={item.id}
          title={item.title}
          poster={item.poster}
          rating={item.rating}
          year={item.year}
        />
      ))}
    </CarouselContainer>
  );
};

export default ElementsCarousel;
