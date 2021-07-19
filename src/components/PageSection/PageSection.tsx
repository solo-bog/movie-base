import React from "react";
import { Link } from "react-router-dom";
import ElementsCarousel from "./ElementsCarousel/ElementsCarousel";

type PageSectionProps = {
  title: string;
  link: string;
};

const PageSection = ({ title, link }: PageSectionProps) => {
  return (
    <section>
      <h2>
        <Link to={link}>{title}</Link>
      </h2>
      <ElementsCarousel />
    </section>
  );
};

export default PageSection;
