import { navList } from "../../data/navList";
import { Container } from "../Container/Container";
import {
  BlogName,
  HeaderBody,
  HeaderList,
  HeaderStyle,
  ListItem,
  Logo,
  ListLink,
} from "./Header.styled";

export const Header = ({ name }) => {
  return (
    <HeaderStyle>
      <Container>
        <HeaderBody>
          <Logo />
          <BlogName>{name}</BlogName>
          <HeaderList>
            {navList.map((item) => {
              return (
                <ListItem key={item.title}>
                  <ListLink to={item.path}>{item.title}</ListLink>
                </ListItem>
              );
            })}
          </HeaderList>
        </HeaderBody>
      </Container>
    </HeaderStyle>
  );
};
