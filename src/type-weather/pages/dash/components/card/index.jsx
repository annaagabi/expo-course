import { Container, ContainerTittle, ContainerWrapper, Description, Title, WeatherDescription, WeatherImage, WeatherRange, WeatherTitle, WeatherWrapper } from "./styles";
import CardBackground from "../../../../assets/images/card-background.png"
import Moon from "../../../../assets/images/moon.png"

export default function Card(){
    return(
        <ContainerWrapper>
        <Container source={CardBackground} imageStyle={{borderRadius: 8}}>
            <ContainerTittle>
                <Title>
                Porto Alegre, RS
                </Title>
                <Description>
                Segunda-feira, 15 de maio de 2023
                </Description>
            </ContainerTittle>

            <WeatherWrapper>
            <WeatherContainer>
                <WeatherTitle>28°C</WeatherTitle>
                <WeatherRange>26°C / 32°C</WeatherRange>
                <WeatherDescription>Poucas Nuvens</WeatherDescription>
                <WeatherImage source={Moon}/>
            </WeatherContainer>

            </WeatherWrapper>


           

        </Container>
        </ContainerWrapper>
    )
}