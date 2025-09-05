import React from "react";
import styled from "@emotion/styled";
import {useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import ZhambylRegionMap from '../../../assets/img/ZhambylRegionMap.png'
import KyrgyzstanFlag from '../../../assets/img/Kyrgystan.png'
import UzbekistanFlag from '../../../assets/img/Uzbekistan.png'
import RussiaFlag from '../../../assets/img/Russia.png'
import ChinaFlag from '../../../assets/img/China.png'

const TranzitPotential = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()
    const items = [
        {
            img: KyrgyzstanFlag,
            title: "до границы Кыргызстана",
            desc: "20 км",
        },
        {
            img: ChinaFlag,
            title: "до границы Китая",
            desc: "750 км",
        },
        {
            img: RussiaFlag,
            title: "до границы России",
            desc: "1300 км",
        },
        {
            img: UzbekistanFlag,
            title: "до границы Узбекистана",
            desc: "200 км",
        },
    ];


    return (
        <Wrapper>
            <MaxWidth>
                <GridBox columns="repeat(2, auto)" height="auto" align="center" padding="48px 24px" width="-webkit-fill-available" gap="40px" justify="space-around">
                        <ZhambylMap src={ZhambylRegionMap}/>
                        <GridBox columns="repeat(2, auto)" height="auto" gap="42px" width="100%">
                            {items.map((item, index) => (
                                <DisplayFlex direction="column" gap="16px" align="start" key={index}>
                                    <IconImg src={item.img}/>
                                    <DisplayFlex direction="column" align="start" gap="8px">
                                        <TextInfo size="18px" >
                                            {item.title}
                                        </TextInfo>
                                        <TextInfo size="32px" weight={700}>
                                            {item.desc}
                                        </TextInfo>
                                    </DisplayFlex>
                                </DisplayFlex>
                            ))}
                        </GridBox>

                </GridBox>
            </MaxWidth>
        </Wrapper>


    )
}

export default TranzitPotential

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
    background: #F7F7F7;
    border-radius: 16px;
`

const ZhambylMap = styled.img`
    width: 540px;
`
const IconImg = styled.img`
    height: 48px
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
    alignContent?: string;
}

const DisplayFlex = styled.div<DisplayFlexProps>`
    display: flex;
    gap: ${(props) => props.gap || "none"};
    flex-direction: ${(props) => props.direction || "row"};
    align-items:  ${(props) => props.align || "center"};
    align-content:  ${(props) => props.alignContent || "start"};
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
    align?: string;
    padding?: string;
    gap?: string;
    width?: string;

}

const GridBox = styled.div<GridBoxProps>`
    display: grid;
    grid-template-columns: ${(props) => props.columns || "none"}; /* 2 колонки */
    grid-auto-rows: auto; /* строки автоматически */
    justify-content:  ${(props) => props.justify || "center"}; /* выравнивание по левому краю */
    align-content:  ${(props) => props.alignContent || "start"}; /* выравнивание по левому краю */
    align-items:  ${(props) => props.align || "start"}; /* выравнивание по левому краю */
    gap: ${(props) => props.gap || "none"};
    height: ${(props) => props.height || "100%"};
    padding: ${(props) => props.padding || "none"};
    width: ${(props) => props.width || "auto"};
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