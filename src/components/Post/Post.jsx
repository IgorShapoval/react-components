import { Link } from "react-router-dom";
import { Post } from "../Posts/Post";
import { BlogList, ListItem } from "./Posts.styled";

export const Posts = ({ posts }) => {
  return (
    <BlogList>
      {posts.map((post) => {
        return (
          <Link to={`${post.id}`} key={post.id}>
            <ListItem>
              <div>{post.title}</div>
            </ListItem>
          </Link>
        );
      })}
    </BlogList>
  );
};
