import React from "react";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import Onion from '../../../assets/img/Landing/Onion.png'
import Garlic from '../../../assets/img/Landing/Garlic.png'
import Sugar from '../../../assets/img/Landing/Sugar beet.png'
import Oilseed from '../../../assets/img/Landing/Oilseed crops.png'
import Potato from '../../../assets/img/Landing/Potato.png'
import OutdoorVegetables from '../../../assets/img/Landing/Outdoor vegetables.png'
import Legumes from '../../../assets/img/Landing/Legumes.png'
import KPC from '../../../assets/img/Landing/КРС.png'
import Horses from '../../../assets/img/Landing/Horses.png'
import Sheep from '../../../assets/img/Landing/Sheep and goats.png'
import Birds from '../../../assets/img/Landing/Birds.png'
import Milk from '../../../assets/img/Landing/Milk processing.png'
import Meat from '../../../assets/img/Landing/Meat processing.png'
import Wool from '../../../assets/img/Landing/Processing of hides and wool.png'

const CropProductionAnimalHusbandry = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()
    const items = [
        {
            img: Onion,
            title: "Лук репчатый",
            desc: "780,6 тыс. тонн",
        },
        {
            img: Garlic,
            title: "Чеснок",
            desc: "35,5 тыс. тонн",
        },
        {
            img: Sugar,
            title: "Свекла сахарная",
            desc: "650 тыс. тонн",
        },
        {
            img: Oilseed,
            title: "Масличные культуры",
            desc: "50,6 тыс. тонн",
        },
        {
            img: Potato,
            title: "Картофель",
            desc: "285,2 тыс. тонн",
        },
        {
            img: OutdoorVegetables,
            title: "Овощи открытого грунта",
            desc: "1, 3 млн тонн",
        },
        {
            img: Legumes,
            title: "Зернобобовые",
            desc: "470 тыс. тонн",
        },



    ];

    const animalItems = [
        {
            img: KPC,
            title: "КРС",
            desc: "548,2 тыс. голов",
        },
        {
            img: Horses,
            title: "Лошади",
            desc: "175 тыс. голов",
        },
        {
            img: Sheep,
            title: "Овец и коз",
            desc: "4,0 млн голов",
        },
        {
            img: Birds,
            title: "Птицы",
            desc: "1,9 млн голов",
        }
    ];

    const directionsItems = [
        {
            img: Milk,
            title: "Переработка\nмолока",
        },
        {
            img: Meat,
            title: "Переработка\nмяса",
        },
        {
            img: Wool,
            title: "Переработка\nшкур и шерсти",
        }
    ];




    return (
        <Wrapper>

            <MaxWidth>
                <GridBoxSecond>
                    <DisplayFlex color="#F7F7F7" padding="36px" radius="16px"  align="start">
                        <DisplayFlex gap="8px" direction="column" >
                            <DisplayFlex gap="36px" direction="column" align="start">
                                <DisplayFlex gap="16px" direction="column" align="start">
                                    <TextInfo size="24px" weight={700} transform="uppercase">
                                        РАСТЕНИЕВОДСТВО
                                    </TextInfo>
                                    <TextInfo size="24px">
                                        Валовый сбор основных с/х культур
                                    </TextInfo>
                                </DisplayFlex>
                                <GridBox columns="repeat(2, auto)"  justify="space-around" gap="48px">
                                    {items.map((item, index) => (
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

                        </DisplayFlex>
                    </DisplayFlex>
                    <DisplayFlex  color="#F7F7F7" radius="16px" gap="36px" padding="36px" direction="column" align="start" justify="start">
                        <TextInfo size="26px" weight={700} transform="uppercase">
                            Животноводство
                        </TextInfo>
                        <GridBox columns="repeat(2, auto)" justify="auto" height="auto" gap="48px">
                            {animalItems.map((item, index) => (
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
                    <DisplayFlex  color="#F7F7F7" radius="16px"  gap="48px" padding="36px" direction="column" align="start" justify="start" >
                        <TextInfo size="26px" weight={700} transform="uppercase">
                            Основные направления
                        </TextInfo>
                        <GridBox columns="repeat(3, auto)" justify="space-between" height="auto">
                            {directionsItems.map((item, index) => (
                                <DisplayFlex direction="column" gap="16px" align="start">
                                    <IconImg src={item.img}/>
                                    <DisplayFlex direction="column" gap="8px" align="start">
                                        <TextInfo size="24px" space="pre-line">
                                            {item.title}
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

export default CropProductionAnimalHusbandry

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
    transform?: string;
    space?: string;
}

const TextInfo = styled.div<TextInfoProps>`
    font-size: ${(props) => props.size || '16px'};
    font-weight: ${(props) => props.weight || 400};
    text-align: ${(props) => props.align || "start"};
    color: ${(props) => props.color || "#000"};
    text-transform: ${(props) => props.transform || "none"};
    white-space: ${(props) => props.space || "none"};

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
    gap?: string;

}

const GridBox = styled.div<GridBoxProps>`
    display: grid;
    grid-template-columns: ${(props) => props.columns || "none"}; /* 2 колонки */
    grid-auto-rows: auto; /* строки автоматически */
    justify-content:  ${(props) => props.justify || "center"}; /* выравнивание по левому краю */
    align-content:  ${(props) => props.alignContent || "start"}; /* выравнивание по левому краю */
    gap: ${(props) => props.gap || "none"};
    height: ${(props) => props.height || "100%"};
    width: 100%;
`;

const GridBoxSecond = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr; /* левая колонка 1/3, правая 2/3 */
    grid-template-rows: 1.8fr 1.2fr; /* делим правую часть на 2 строки */
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