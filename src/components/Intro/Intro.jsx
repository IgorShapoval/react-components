import { Container } from "../Container/Container"
import { IntroBanner, IntroStyled } from "./Intro.styled"

export const Intro = () => {
    return (
        <IntroStyled>
            <Container>
                <IntroBanner>Banner</IntroBanner>
            </Container>
        </IntroStyled>
    )
}