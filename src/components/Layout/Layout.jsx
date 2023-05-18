import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Intro } from "../Intro/Intro";

export const Layout = () => {
  return (
    <>
      <Header name="Blog name" />
      <Intro />
      <Outlet />
    </>
  );
};
