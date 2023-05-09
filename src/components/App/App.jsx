
import { Blog } from "../Blog/Blog"
import { Container } from "../Container/Container"
import { Header } from "../Header/Header"
import { Intro } from "../Intro/Intro"
import { News } from "../News/News"
import { AppContainer, Wrapper } from "./App.styled"


export const App = () => {
    return (
        <>
            <Header name="Blog name" />
            <Intro />
            <Wrapper>
                <AppContainer>
                    <Blog />
                    <News/>
                </AppContainer>
            </Wrapper>  
        </>
    )
}