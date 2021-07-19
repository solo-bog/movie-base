import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <div>
        <svg
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="English"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="1.1-Moives" transform="translate(-328.000000, -82.000000)">
              <g id="search_icon" transform="translate(325.000000, 79.000000)">
                <circle
                  id="Oval"
                  stroke="#222222"
                  strokeWidth="3"
                  cx="13"
                  cy="13"
                  r="8"
                />
                <line
                  x1="18.6014425"
                  y1="18.4588566"
                  x2="24.7861416"
                  y2="24.7506653"
                  id="Path-2"
                  stroke="#222222"
                  strokeWidth="3"
                />
                <rect
                  id="Rectangle-10"
                  fill="#FFFFFF"
                  opacity="0"
                  x="0"
                  y="0"
                  width="30"
                  height="30"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </StyledHeader>
  );
};

export default PageHeader;
