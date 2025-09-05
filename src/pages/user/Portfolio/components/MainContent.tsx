import React from 'react'
import styled from "@emotion/styled";
import {Body1, H1, H4} from "../../../../layouts/TextStyles";
import { YourPortfolioOfWine} from "../../../../utils/constants";
import {Box} from "@mui/system";

interface FontColorProps {
    color: string;
    fontSize?: number;
    fontWeight?: number;

}

const MainContent = () => {

    const content = [
        {
            title: "Explore your wine portfolio",
        }
    ]

    return (
        <Box sx={{mb: '48px'}}>
            <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}> {content[0].title}</H4>

            <FlexBox style={{gap: '20px'}}>
                <TotalValuationWrapper>
                    <Body1 color="#D2D2D2">Total valuation</Body1>
                    <H1 style={{marginBottom: "16px"}} color="#FFF">€32,263.03</H1>
                    <Body1 style={{fontSize: '18px', marginBottom: '8px'}} color="#D2D2D2">Last 7 days
                        return <StyledBoldText color="#FFF">+158,29$</StyledBoldText> <StyledBoldText
                            color="#D2D2D2">(+1,30%)</StyledBoldText></Body1>
                    <Body1 style={{fontSize: '18px', marginBottom: '8px'}} color="#D2D2D2">Last 30 days
                        return <StyledBoldText color="#FFF">+2812,01$</StyledBoldText> <StyledBoldText
                            color="#D2D2D2">(+5,11%)</StyledBoldText></Body1>
                    <Body1 style={{fontSize: '18px', marginBottom: '8px'}} color="#D2D2D2">Last 12 month
                        return <StyledBoldText color="#FFF">+6104,21$</StyledBoldText> <StyledBoldText
                            color="#D2D2D2">(+24,76%)</StyledBoldText></Body1>
                </TotalValuationWrapper>
                <GridBox>
                    {YourPortfolioOfWine.map((b, index) => {
                        return (
                            <StatisticsWrapper key={index}>
                                <StyledBoldText color="#525252" fontSize={16}>{b.title}</StyledBoldText>
                                <StyledBoldText color="#525252" fontSize={48} fontWeight={500}>{b.amount1}</StyledBoldText>
                                <StyledBoldText color="#525252" fontSize={32} fontWeight={300}>{b.amount2}</StyledBoldText>
                                <StyledBoldText color="#525252" fontSize={20} fontWeight={400}>{b.stocks}</StyledBoldText>
                            </StatisticsWrapper>
                        )
                    })}
                </GridBox>
            </FlexBox>
        </Box>


    )
}

export default MainContent


const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`
const TotalValuationWrapper = styled.div`
  background-color: #1F1F1F;
  padding: 28px 36px;
  width: 100%;
  border-radius: 4px;
`
const StatisticsWrapper = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 25px;
  border-radius: 4px;
  border: 1px solid #CECECE;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`
const StyledBoldText = styled.span<FontColorProps>`
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : '18px'};
  font-weight: ${(props) => props.fontWeight || 700};
  color: ${(props) => props.color};
`;
