import { BlogList, BlogStyled, BlogTitle, ListItem } from "./Blog.styled"

export const Blog = () => {
    return (
        <BlogStyled>
            <BlogTitle>Blog</BlogTitle>
            <BlogList>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </BlogList>
        </BlogStyled>
    )
}