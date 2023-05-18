import { Route, Routes } from "react-router-dom";
import { Blog } from "../Blog/Blog";
import { Header } from "../Header/Header";
import { Intro } from "../Intro/Intro";
import { Layout } from "../Layout/Layout";
import { News } from "../News/News";
import { AppContainer, Wrapper } from "./App.styled";
import { Home } from "../Home/Home";
import { routes } from "../../data/routes";
import { Post } from "../Posts/Post";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.blog + "/:id"} element={<Post />} />
          <Route path={routes.news} element={<News />} />
        </Route>
      </Routes>
    </>
  );
};
