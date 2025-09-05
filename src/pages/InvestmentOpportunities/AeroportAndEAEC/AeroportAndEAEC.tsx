import React from "react";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import AeroportLogo from '../../../assets/img/AeroportLogo.png'
import EAEC from '../../../assets/img/EAEC.png'

const AeroportAndEAEC = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()


    return (
        <Wrapper>

            <MaxWidth>
                <GridBox columns="1fr 1fr">
                    <DisplayFlex color="#F7F7F7" radius="16px" gap="24px" padding="24px 32px" direction="row"
                                 align="center">
                        <IconImg src={AeroportLogo}/>
                        <DisplayFlex gap="8px" direction="column" align="start">
                            <TextInfo size="20px" weight={700}>
                                МЕЖДУНАРОДНЫЙ АЭРОПОРТ «АУЛИЕ-АТА»:
                            </TextInfo>
                            <TextInfo size="16px" weight={400}>
                                -проектная мощность – 650 тысяч пассажиров в год;<br/>
                                -пропускная способность воздушно-грузового <br/> комплекса составляет 100 тысяч тонн в
                                год.
                            </TextInfo>
                        </DisplayFlex>
                    </DisplayFlex>
                    <DisplayFlex color="#F7F7F7" radius="16px" gap="24px" padding="24px 32px" direction="row"
                                 align="center">
                        <IconImg src={EAEC}/>
                        <DisplayFlex gap="8px" direction="column" align="start">
                            <TextInfo size="24px" weight={400} align="center">
                                <TextInfo size="24px" weight={700} align="center">
                                    Свободная торговля
                                </TextInfo>
                                в рамках ЕАЭС
                            </TextInfo>
                        </DisplayFlex>
                    </DisplayFlex>
                </GridBox>
            </MaxWidth>
        </Wrapper>


    )
}

export default AeroportAndEAEC

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

const TeritoryIcon = styled.img`
    width: 80px;
    height: 80px
`
const IconImg = styled.img`
    width: 90px;
    height: 90px
`

interface TextInfoProps {
    align?: string;
    color?: string;
    weight?: number;
    size?: string;
}

const TextInfo = styled.div<TextInfoProps>`
    font-size: ${(props) => props.size || '16px'};
    font-weight: ${(props) => props.weight || 400};
    text-align: ${(props) => props.align || "start"};
    color: ${(props) => props.color || "#000"};

`

interface DisplayFlexProps {
    justify?: string;
    width?: string;
    color?: string;
    gap?: string;
    direction?: string;
    padding?: string;
    radius?: string;
    align?: string;
}

const DisplayFlex = styled.div<DisplayFlexProps>`
    display: flex;
    gap: ${(props) => props.gap || "none"};
    flex-direction: ${(props) => props.direction || "row"};
    align-items: ${(props) => props.align || "center"};
    width: ${(props) => props.width || "auto"};
    justify-content: ${(props) => props.justify || "flex-start"};
    background: ${(props) => props.color || "none"};
    padding: ${(props) => props.padding || "0"};
    border-radius: ${(props) => props.radius || "none"};
`;

interface GridBoxProps {
    columns?: string;
    justify?: string;
    alignContent?: string;
    height?: string;

}

const GridBox = styled.div<GridBoxProps>`
    display: grid;
    grid-template-columns: ${(props) => props.columns || "none"}; /* 2 колонки */
    grid-auto-rows: auto; /* строки автоматически */
    justify-content: ${(props) => props.columns || "center"}; /* выравнивание по левому краю */
    align-content: ${(props) => props.alignContent || "start"}; /* выравнивание по левому краю */
    gap: 24px; /* расстояние между элементами */
    height: ${(props) => props.height || "100%"};
    width: 100%;
`;

const GridBoxSecond = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr; /* левая колонка 1/3, правая 2/3 */
    grid-template-rows: 1fr 1fr; /* делим правую часть на 2 строки */
    gap: 24px;
    width: 100%;
    height: 100%;

    /* все элементы будут по сетке */

    & > div:nth-of-type(1) {
        grid-column: 1 / 2; /* левая колонка */
        grid-row: 1 / 3; /* растягивается на 2 строки */
    }

    & > div:nth-of-type(2) {
        grid-column: 2 / 3; /* правая колонка верх */
        grid-row: 1 / 2;
    }

    & > div:nth-of-type(3) {
        grid-column: 2 / 3; /* правая колонка низ */
        grid-row: 2 / 3;
    }
`;