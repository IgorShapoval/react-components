import styled from "@emotion/styled";

export const NewsStyled = styled.section`
  width: 100%;
  padding: 15px 25px 25px 25px;
`;

export const NewsTitle = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
  color: #000000;
  text-align: center;
  margin-bottom: 15px;
`;

export const NewsList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  width: 100%;
  height: 110px;
  background: #bdcdf7;
`;
