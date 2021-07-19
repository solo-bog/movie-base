import React from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem/CarouselItem";

const CarouselContainer = styled.div`
  display: flex;
  padding: 20px 0;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const ElementsCarousel = () => {
  const items = [
    {
      id: 1,
      title: "Movie 1",
      poster:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/vDiKMY5ObCIuJ6gvcognXBttrcv.jpg",
      rating: 9.2,
      year: 2001,
    },
    {
      id: 2,
      title: "Movie 2",
      poster:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
      rating: 6.2,
      year: 2007,
    },
    {
      id: 3,
      title: "Movie 5",
      poster:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/nSNdyoZXNlZTA7CPIViFPn9C096.jpg",
      rating: 9.1,
      year: 2011,
    },
    {
      id: 4,
      title: "Movie 7",
      poster:
        "https://www.themoviedb.org/t/p/w440_and_h660_face/eNW3jflTJHh5ZzkM2s6vGjDmEck.jpg",
      rating: 1.2,
      year: 2019,
    },
  ];
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
