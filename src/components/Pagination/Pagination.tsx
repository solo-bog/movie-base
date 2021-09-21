import React from "react";
import styled from "styled-components";

type PaginationProps = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
};

const PaginagionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationButton = styled.button`
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  background-image: ${(props) => props.theme.main.gradientBg};
  color: ${(props) => props.theme.main.additionalTextColor};
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const renderButtons = () => {
    const buttons = [];
    for (let i = currentPage - 5; i <= currentPage + 5; i += 1) {
      if (i >= 1 && i <= totalPages) {
        buttons.push(
          <PaginationButton
            key={i}
            type="submit"
            onClick={() => setCurrentPage(i)}
          >
            {i}
            {currentPage === i && "- current"}
          </PaginationButton>
        );
      }
    }
    return buttons;
  };
  return (
    <PaginagionContainer>
      {currentPage !== 1 && (
        <PaginationButton
          type="submit"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          prev
        </PaginationButton>
      )}
      {renderButtons()}
      {currentPage !== totalPages && (
        <PaginationButton
          type="submit"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          next
        </PaginationButton>
      )}
    </PaginagionContainer>
  );
};

export default Pagination;
