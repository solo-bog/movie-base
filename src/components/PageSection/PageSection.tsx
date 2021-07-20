import React from "react";
import { Link } from "react-router-dom";
import ElementsCarousel from "./ElementsCarousel/ElementsCarousel";
import { Movie } from "../../features/movies/types";

type PageSectionProps = {
  title: string;
  link: string;
  items: Movie[];
};

const PageSection = ({ title, link, items }: PageSectionProps) => {
  return (
    <section>
      <h2>
        <Link to={link}>{title}</Link>
      </h2>
      <ElementsCarousel items={items} />
    </section>
  );
};

export default PageSection;
