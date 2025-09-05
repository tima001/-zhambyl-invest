import React from "react";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import Phosphorites from '../../../assets/img/Landing/PHOSPHORITES.png'
import MineralSalt from '../../../assets/img/Landing/MINERAL SALT.png'
import RockSalt from '../../../assets/img/Landing/ROCK SALT.png'
import Fluorspar from '../../../assets/img/Landing/FLUORSPAR (FLUORITE).png'
import Gold from '../../../assets/img/Landing/gold.png'
import Copper from '../../../assets/img/Landing/copper.png'
import LeadAndZinc from '../../../assets/img/Landing/LEAD AND ZINC.png'
import Tin from '../../../assets/img/Landing/tin.png'
import Barite from '../../../assets/img/Landing/BARITE.png'
import Gypsum from '../../../assets/img/Landing/GYPSUM AND ANHYDRITE.png'
import Gas from '../../../assets/img/Landing/gas.png'
import Coal from '../../../assets/img/Landing/coal.png'
import Kamaz from '../../../assets/img/Landing/Kamaz.png'

const StonesOfRegion = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()

    const groups = [
        [
            {img: Phosphorites, title: "ФОСФОРИТЫ"},
            {img: MineralSalt, title: "МИНЕРАЛЬНАЯ СОЛЬ"},
            {img: RockSalt, title: "КАМЕННАЯ СОЛЬ"},
            {img: Fluorspar, title: "ПЛАВИКОВЫЙ ШПАТ (ФЛЮОРИТ)"},
        ],
        [
            {img: Gold, title: "ЗОЛОТО"},
            {img: Copper, title: "МЕДЬ"},
            {img: LeadAndZinc, title: "СВИНЕЦ И ЦИНК"},
            {img: Tin, title: "ОЛОВО"},
        ],
        [
            {img: Barite, title: "БАРИТ"},
            {img: Gypsum, title: "ГИПС И АНГИДРИТ"},
            {img: Gas, title: "ГАЗ"},
            {img: Coal, title: "УГОЛЬ"},
        ]
    ];

    return (
        <Wrapper>
            <MaxWidth>
                <DisplayFlex justify="start" width="100%" bgImg={Kamaz} align="start" height="300px" radius="16px">

                    <DisplayFlex align="start" justify="start" padding="36px" direction="column" gap="24px">
                        <TextInfo color="#FFF" size="24px" space="pre-line" weight={600} transform="uppercase">
                            Богатая минерально-сырьевая база
                        </TextInfo>
                        <TextInfo color="#FFF" size="32px" transform="uppercase">
                            Жамбылской области
                        </TextInfo>
                    </DisplayFlex>
                </DisplayFlex>

                <GridBoxSecond>
                    {groups.map((group, idx) => (
                        <GridBox
                            key={idx}
                            background="#F7F7F7"
                            radius="16px"
                            padding="36px"
                            columns="repeat(1, auto)"
                            justify="space-between"
                            height="auto"
                            gap="24px"
                        >
                            {group.map((item, index) => (
                                <DisplayFlex key={index} gap="32px" align="center">
                                    <IconImg src={item.img} alt={item.title}/>
                                    <TextInfo size="24px" space="pre-line" weight={700}>
                                        {item.title}
                                    </TextInfo>
                                </DisplayFlex>
                            ))}
                        </GridBox>
                    ))}
                </GridBoxSecond>
            </MaxWidth>
        </Wrapper>
    )
}

export default StonesOfRegion


const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
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
    width: 80px;
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
    bgImg?: string;
    height?: string;
}

const DisplayFlex = styled.div<DisplayFlexProps>`
    display: flex;
    gap: ${(props) => props.gap || "none"};
    flex-direction: ${(props) => props.direction || "row"};
    align-items: ${(props) => props.align || "center"};
    width: ${(props) => props.width || "auto"};
    height: ${(props) => props.height || "auto"};
    justify-content: ${(props) => props.justify || "flex-start"};
    background: ${(props) => props.color || "none"};
    padding: ${(props) => props.padding || "0"};
    border-radius: ${(props) => props.radius || "none"};
    background-image: ${(props) => props.bgImg ? `url(${props.bgImg})` : "none"};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

interface GridBoxProps {
    columns?: string;
    justify?: string;
    alignContent?: string;
    height?: string;
    gap?: string;
    radius?: string;
    padding?: string;
    background?: string;
    width?: string
}

const GridBox = styled.div<GridBoxProps>`
    display: grid;
    grid-template-columns: ${(props) => props.columns || "none"}; /* 2 колонки */
    grid-auto-rows: auto; /* строки автоматически */
    justify-content: ${(props) => props.justify || "center"}; /* выравнивание по левому краю */
    align-content: ${(props) => props.alignContent || "start"}; /* выравнивание по левому краю */
    gap: ${(props) => props.gap || "none"};
    height: ${(props) => props.height || "100%"};
    width: ${(props) => props.width || "auto"};
    border-radius: ${(props) => props.radius || "0"};
    padding: ${(props) => props.padding || "0"};
    background: ${(props) => props.background || "none"};
`;

const GridBoxSecond = styled.div`
    display: grid;
    gap: 24px;
    width: 100%;
    height: auto;
    grid-template-columns: repeat(3, 1fr);

`;