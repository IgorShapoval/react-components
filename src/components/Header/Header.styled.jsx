import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderStyle = styled.header`
  background: #d9d9d9;
  margin-bottom: 20px;
`;

export const HeaderBody = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 180px;
  height: 30px;
  background: #f1f2ae;
`;

export const BlogName = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

export const HeaderList = styled.ul`
  padding: 0;
  display: flex;
  gap: 20px;
  list-style: none;
`;
export const ListItem = styled.li`
  background: #e7efd6;
`;

export const ListLink = styled(NavLink)`
  display: inline-flex;
  text-decoration: none;
  padding: 10px;
  color: black;
`;
