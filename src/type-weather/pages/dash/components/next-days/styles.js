import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    align-itens: center;
    flex-direction: row;
    justify-content: center;
    width: 339px;
    height: 176px;
    background-color: #16161F;
    border-radius: 8px;
`

export const DayContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    gap: 4px;
    width: 67px;
    height: 152px;
`

export const DayText = styled.Text`
    font-size: 14px;
    font-weight: 700;
    color: #BFBFD4;
`

export const DayImage= styled.Image`
    width: 54px;
    height: 54px;
`

export const TempContainer = styled.View`
    display: flex;
    flex-direction: column;
`

export const MaxTempText = styled.Text`
    font-size: 14px;
    font-height: 700;
    color: white;
`

export const MinTempText = styled.Text`
    font-size: 14px;
    font-height: 700;
    color: #7F7F98;
`
