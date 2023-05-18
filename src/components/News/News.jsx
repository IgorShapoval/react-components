import { Container } from "../Container/Container";
import { ListItem, NewsList, NewsStyled, NewsTitle } from "./News.styled";

export const News = () => {
  return (
    <Container>
      <NewsStyled>
        <NewsTitle>News</NewsTitle>
        <NewsList>
          <ListItem />
          <ListItem />
          <ListItem />
        </NewsList>
      </NewsStyled>
    </Container>
  );
};
