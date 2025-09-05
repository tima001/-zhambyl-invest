import React from "react";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import teritoryIconImg from '../../../assets/img/teritoryIconImg.png'
import IrrigatedImg from '../../../assets/img/IrrigatedImg.png'
import Haymaking from '../../../assets/img/Haymaking.png'
import ArableLand from '../../../assets/img/Arable-land.png'
import Pastures from '../../../assets/img/Pastures.png'
import KZMapImg from '../../../assets/img/KZMapImg.png'

const ZhambylRegionClimateAndPopulation = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()
    const items = [
        {
            img: IrrigatedImg,
            title: "Орошаемые",
            desc: "181,8 га",
        },
        {
            img: Haymaking,
            title: "Сенокосы",
            desc: "31,4 тыс. га",
        },
        {
            img: ArableLand,
            title: "Пашня",
            desc: "786,6 тыс. га",
        },
        {
            img: Pastures,
            title: "Пастбища",
            desc: "3 620,3 тыс. га",
        },
    ];

    const climateItems = [
        {
            img: IrrigatedImg,
            title: "Осадки",
            desc: "140 – 220 мм. в год",
        },
        {
            img: Haymaking,
            title: "Лето",
            desc: "+21, +25° С",
        },
        {
            img: ArableLand,
            title: "Зима",
            desc: "-8, -12° С",
        }
    ];

    const populationItems = [
        {
            img: IrrigatedImg,
            title: "Область",
            desc: "1 222,5 тыс. человек",
        },
        {
            img: Haymaking,
            title: "Город",
            desc: "531,6 тыс. человек",
        },
        {
            img: ArableLand,
            title: "Трудоспособное население ",
            desc: "540 тыс. человек",
        }
    ];




    return (
        <Wrapper>
            <MaxWidth>
                <GridBoxSecond>
                    <DisplayFlex color="#F7F7F7" width="100%" justify="center" padding="36px 0" radius="16px">
                        <DisplayFlex gap="8px" direction="column" width="100%">
                            <DisplayFlex gap="36px" direction="column">
                                <DisplayFlex gap="8px" direction="column">
                                    <TeritoryIcon src={teritoryIconImg}/>
                                    <TextInfo size="16px">
                                        ТЕРРИТОРИЯ
                                    </TextInfo>
                                    <TextInfo size="34px">
                                        144 264 км²
                                    </TextInfo>
                                </DisplayFlex>
                                <TextInfo size="26px" weight={700}>
                                    Земельные ресурсы
                                </TextInfo>
                                <GridBox columns="repeat(2, auto)">
                                    {items.map((item, index) => (
                                        <DisplayFlex direction="column" gap="16px">
                                            <IconImg src={item.img}/>
                                            <DisplayFlex direction="column" gap="8px">
                                                <TextInfo size="24px" weight={700}>
                                                    {item.title}
                                                </TextInfo>
                                                <TextInfo size="20px">
                                                    {item.desc}
                                                </TextInfo>
                                            </DisplayFlex>
                                        </DisplayFlex>
                                    ))}
                                </GridBox>
                            </DisplayFlex>

                        </DisplayFlex>
                    </DisplayFlex>
                    <DisplayFlex  color="#F7F7F7" radius="16px" gap="24px" padding="24px 42px" direction="column" align="start" justify="center">
                        <TextInfo size="26px" weight={700}>
                            Климат
                        </TextInfo>
                        <GridBox columns="repeat(3, auto)" justify="space-between" height="auto">
                            {climateItems.map((item, index) => (
                                <DisplayFlex direction="column" gap="16px" align="start">
                                    <IconImg src={item.img}/>
                                    <DisplayFlex direction="column" gap="8px" align="start">
                                        <TextInfo size="24px" weight={700}>
                                            {item.title}
                                        </TextInfo>
                                        <TextInfo size="20px">
                                            {item.desc}
                                        </TextInfo>
                                    </DisplayFlex>
                                </DisplayFlex>
                            ))}
                        </GridBox>
                    </DisplayFlex>
                    <DisplayFlex  color="#F7F7F7" radius="16px"  gap="24px" padding="24px 42px" direction="column" align="start" justify="center" >
                        <TextInfo size="26px" weight={700}>
                            Население
                        </TextInfo>
                        <GridBox columns="repeat(3, auto)" justify="space-between" height="auto">
                            {populationItems.map((item, index) => (
                                <DisplayFlex direction="column" gap="16px" align="start">
                                    <IconImg src={item.img}/>
                                    <DisplayFlex direction="column" gap="8px" align="start">
                                        <TextInfo size="24px" weight={700}>
                                            {item.title}
                                        </TextInfo>
                                        <TextInfo size="20px">
                                            {item.desc}
                                        </TextInfo>
                                    </DisplayFlex>
                                </DisplayFlex>
                            ))}
                        </GridBox>
                    </DisplayFlex>
                </GridBoxSecond>
            </MaxWidth>
        </Wrapper>


    )
}

export default ZhambylRegionClimateAndPopulation

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
    width: 60px;
    height: 60px
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
    align-items:  ${(props) => props.align || "center"};
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
    justify-content:  ${(props) => props.columns || "center"}; /* выравнивание по левому краю */
    align-content:  ${(props) => props.alignContent || "start"}; /* выравнивание по левому краю */
    gap: 48px; /* расстояние между элементами */
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