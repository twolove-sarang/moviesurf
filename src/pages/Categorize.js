import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { detailAction } from "../redux/action/detailAction";

const Categorize = () => {
  const dispatch = useDispatch();
  const { getGenre, loading, gotoDetailPage } = useSelector(
    (state) => state.detail
  );
  console.log("장르가져오기", getGenre);
  console.log("detailpage", gotoDetailPage);
  const [changeGenre, setChangeGenre] = useState('Genre');
  const [searchItem, setSearchItem] = useState([])

  useEffect(() => {
    dispatch(detailAction.getDetail());
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <ClipLoader color="#446ff2" loading={loading} size={100} />
      </div>
    );
  }
  return (
    <div>
      <CategoryWidth>
        {getGenre.genres &&
          getGenre.genres.map((item) => (
            <CategoryStyle onClick={() => setChangeGenre(item.name)}>
              {item.name}
            </CategoryStyle>
          ))}
      </CategoryWidth>
      {/* 클릭한 아이템 보여주기 */}
      <CategoryTitle>{changeGenre}</CategoryTitle>
      {/* 클릭한 아이템(장르)에 따른 데이터 불러와서 카드 형태로 만들기 */}
      {/* 클릭한 아이템 == 장르, 데이터 순서대로 나열해주기 */}
      {/* 클릭한 아이템이 속해있는 버튼은 define,안속해있는 버튼은 undefine */}
      {/* [a,b,c,d,e,f,g]중에 [a]가 속해있는 버튼, [a,b]가 속해있는 버튼, [a,b,c]가 속해있는 버튼 */}
      {/* 디테일 페이지랑 연결해주기 */}
      {/* 장르에 있는 값 중 내가 onclick으로 []안에 넣은 필터값을 map해야 한다. */}
      {/* 내가 클릭한 값? 필터? */}
    </div>
  );
};

export default Categorize;

const CategoryStyle = styled.button`
  color: white;
  background-color: #1f1f1f;
  padding: 15px;
  margin: 5px;
  border-radius: 50px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  font-weight: 300;
  font-size: 20px;
  cursor: pointer;

  &:active {
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

const CategoryWidth = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryTitle = styled.div`
  font-family: Cafe24Ohsquare;
  font-size: 90px;
  color: white;
  margin-top: 80px;
`;
