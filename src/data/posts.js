export const posts = [
  {
    id: "id-1",
    title: "Post-1",
  },
  {
    id: "id-2",
    title: "Post-2",
  },
  {
    id: "id-3",
    title: "Post-3",
  },
  {
    id: "id-4",
    title: "Post-4",
  },
];

export const getPost = () => {
  return posts;
};

export const getPostById = (postId) => {
  return posts.find((post) => post.id === postId);
};
