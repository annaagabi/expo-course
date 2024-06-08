import { Container, DayContainer, DayImage, DayText, MaxTempText, MinTempText, TempContainer } from "./styles";
import { Trovao } from "../../../../assets/images/trovoada.png"
import { Chuva  } from "../../../../assets/images/chuva.png"
import { Nublado } from "../../../../assets/images/sol-nublado.png"
import { Nuvem } from "../../../../assets/images/nuvens.png"
import { Sol } from "../../../../assets/images/sol-bolinha.png"

export default function NextDays () {
    return(
        <Container>
            <DayContainer>
                <DayText>Ter</DayText>
                <DayImage source={ Trovao }/>
                <TempContainer>
                    <MaxTempText>32°C</MaxTempText>
                    <MinTempText>26°C</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Qua</DayText>
                <DayImage source={ Chuva }/>
                <TempContainer>
                    <MaxTempText>32°C</MaxTempText>
                    <MinTempText>26°C</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Qui</DayText>
                <DayImage source={ Nublado }/>
                <TempContainer>
                    <MaxTempText>32°C</MaxTempText>
                    <MinTempText>26°C</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Sex</DayText>
                <DayImage source={ Nuvem }/>
                <TempContainer>
                    <MaxTempText>32°C</MaxTempText>
                    <MinTempText>26°C</MinTempText>
                </TempContainer>
            </DayContainer>
            <DayContainer>
                <DayText>Sab</DayText>
                <DayImage source={ Sol }/>
                <TempContainer>
                    <MaxTempText>32°C</MaxTempText>
                    <MinTempText>26°C</MinTempText>
                </TempContainer>
            </DayContainer>
        </Container>
    )
}