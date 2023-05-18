import { getPost } from "../../data/posts";
import { Container } from "../Container/Container";
import { Posts } from "../Post/Post";
import { BlogStyled, BlogTitle, ListItem } from "./Blog.styled";

export const Blog = () => {
  const posts = getPost();

  return (
    <Container>
      <BlogStyled>
        <BlogTitle>Blog</BlogTitle>
        <Posts posts={posts} />
      </BlogStyled>
    </Container>
  );
};
