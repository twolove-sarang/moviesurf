import React from "react";
import { useState } from "react";
import Pagination from "react-js-pagination";
import styled from "styled-components";

const Paging = ({page,count,setPage}) => {
  // const [page, setPage] = useState();
  // const handlePageChange = (page) => {
  //   setPage(page);
  //   console.log(page)
  // };
  return (
    <div>
      <PageStyle>
        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={count}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={setPage}
        />
      </PageStyle>
    </div>
  );
};

export default Paging;

const PageStyle = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    // display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #9f9f9f;
    border-radius: 30px;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: white;
  }
`;
