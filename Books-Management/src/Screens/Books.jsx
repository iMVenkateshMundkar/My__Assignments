import styled from "styled-components";

// Components
import BookList from "../Components/BookList";
import FilterSort from "../Components/FilterSort";

const Books = () => {
  return (
    <div>
      <h2>Books</h2>
      <BooksPageWrapper>
        <FilterSortWrapper>
          <FilterSort />
        </FilterSortWrapper>
        <BookListWrapper>
          <BookList />
        </BookListWrapper>
      </BooksPageWrapper>
    </div>
  );
};

export default Books;

const BooksPageWrapper = styled.div`
  display: flex;
  padding: 0px 30px;
`;

const FilterSortWrapper = styled.div`
  width: 300px;
  border: 1px solid red;
`;

const BookListWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, max-content));
  grid-gap: 20px;
  justify-content: center;
  padding: initial;
`;
