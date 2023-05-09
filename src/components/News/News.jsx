import { ListItem, NewsList, NewsStyled, NewsTitle } from "./News.styled"

export const News = () => {
    return (
        <NewsStyled>
            <NewsTitle>News</NewsTitle>
            <NewsList>
                <ListItem />
                <ListItem />
                <ListItem />
            </NewsList>
        </NewsStyled>
    )
}