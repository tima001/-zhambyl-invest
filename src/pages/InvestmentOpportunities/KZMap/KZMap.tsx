import React from "react";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import regionIconImg from '../../../assets/img/regionIconImg.png'
import KZMapImg from '../../../assets/img/KZMapImg.png'

const KZMap = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()

    return (
        <Wrapper>

            <MaxWidth>
                <RegionInfoBox>
                    <RegionIcon src={regionIconImg}/>
                    <RegionTextWrapper>
                        <RegionText>
                            • <RegionBoldText>10</RegionBoldText> районов
                        </RegionText>
                        <RegionText>
                            • <RegionBoldText>367</RegionBoldText> населенных пункта
                        </RegionText>
                        <RegionText>
                            • 3 города районного подчинения: <RegionBoldText>Каратау, Жанатас, Шу</RegionBoldText>
                        </RegionText>
                        <RegionText>
                            • <RegionBoldText>Тараз</RegionBoldText> – административный центр
                        </RegionText>

                    </RegionTextWrapper>
                </RegionInfoBox>
                <KZMapImgWrapper src={KZMapImg}/>

                <DisplayFlex justify="space-between" width="100%">
                <DisplayFlex>
                    <BlueTransportLine/>
                    <TransportInfo>
                        МЕЖДУНАРОДНЫЙ АВТОМОБИЛЬНЫЙ КОРИДОР<br/>
                        «ЗАПАДНАЯ ЕВРОПА - ЗАПАДНЫЙ КИТАЙ»
                    </TransportInfo>
                </DisplayFlex>
                <DisplayFlex>
                    <BlackTransportLine/>
                    <TransportInfo>
                        МЕЖДУНАРОДНЫЙ<br/> ЖЕЛЕЗНОДОРОЖНЫЙ
                        ПРОЕКТ «ТРАСЕКА»
                    </TransportInfo>
                </DisplayFlex>
                <RailwayConnectionBox>
                    <TransportInfo color="#fff">
                        25 ЖД соединений
                        с 50 станциями
                    </TransportInfo>
                </RailwayConnectionBox>
                </DisplayFlex>

            </MaxWidth>
        </Wrapper>


    )
}

export default KZMap

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;

`
const MaxWidth = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1400px;
    width: 100%;
    gap: 40px;
`

const RegionInfoBox = styled.div`
    borderRadius: 12px;
    background: #F2F5FB;
    padding: 12px 16px;
    display: flex;
    flex-direction: кщц;
    alignItems: center;
    gap: 20px;
    border-radius: 12px;
    padding: 20px;
`
const RegionText = styled.span`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 4px;
`
const RegionBoldText = styled.span`
    font-weight: 700;
    font-size: 16px;
`
const RegionTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const RegionIcon = styled.img`
    width: 80px;
    height: 80px
`
const KZMapImgWrapper = styled.img`
    width: 1075px;
`
const BlueTransportLine = styled.div`
    width: 24px;
    height: 8px;
    background: #00A2FF
`
const BlackTransportLine = styled.div`
    width: 24px;
    height: 8px;
    background-color: #000;
    background: repeating-linear-gradient(to right, #000 0, #000 7px, transparent 7px, transparent 12px)

`

interface TransportInfoProps {
    align?: string;
    color?: string;
}
const TransportInfo = styled.div<TransportInfoProps>`
    font-size: 16px;
    font-weight: 400;
    text-align: ${(props) => props.align || "start"};
    color: ${(props) => props.color || "#000"};
    
`
const RailwayConnectionBox = styled.div`
    background: #4083E5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 16px 24px
`
interface DisplayFlexProps {
    justify?: string;
    width?: string;
}

const DisplayFlex = styled.div<DisplayFlexProps>`
    display: flex;
    gap: 16px;
    align-items: center;
    width: ${(props) => props.width || "auto"};
    justify-content: ${(props) => props.justify || "flex-start"};
`;
