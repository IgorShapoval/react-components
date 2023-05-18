import { useParams } from "react-router-dom";
import { getPostById } from "../../data/posts";
import { Container } from "../Container/Container";

export const Post = () => {
  const { id } = useParams();
  const post = getPostById(id);

  return (
    <Container>
      <div>
        {post.title} - {id}
      </div>
    </Container>
  );
};
