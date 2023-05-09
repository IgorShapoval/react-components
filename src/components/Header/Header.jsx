import { Container } from "../Container/Container"
import { BlogName, HeaderBody, HeaderList, HeaderStyle, ListItem, Logo } from "./Header.styled"

export const Header = ({name}) => {
    return (
        <HeaderStyle>
            <Container>
                <HeaderBody>
                    <Logo />
                    <BlogName>{name}</BlogName>
                    <HeaderList>
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem />
                        <ListItem/>
                    </HeaderList>
                </HeaderBody>
            </Container>
        </HeaderStyle>
    )
}