import React from 'react'
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import {H4} from "../../../../layouts/TextStyles";
import {TradingMainInvestmentInfo} from "../../../../utils/constants";
import {Box} from "@mui/system";

interface ContentWrapperProps {
    bgImg: string;
}

const MainContent = () => {

    const content = [
        {
            title: "Explore diversified wine investment funds",
            desc: "From rare vintages to emerging vineyards, these funds offer a unique blend of luxury and investment\n" +
                "                potential. Immerse yourself in the world of wine investment, where each bottle tells a story and every\n" +
                "                vintage holds the promise of both taste and financial appreciation. Explore our diversified wine\n" +
                "                investment funds and uncork a new dimension of investment sophistication!"
        }
    ]

    return (
        <Box sx={{mb: '48px'}}>
            <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}> {content[0].title}</H4>
            <Typography
                variant="h5"
                component="div"
                color="text.secondary"
                sx={{
                    fontWeight: 400,
                    fontSize: '20px',
                    color: '##525252',
                    mb: '24px'
                }}
            >
                {content[0].desc}
            </Typography>

            <FlexBox style={{gap: '20px'}}>
                <GridBox>
                    {TradingMainInvestmentInfo.map((b, index) => {
                        return (
                            <ContentWrapper key={index} bgImg={b.img}>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '24px',
                                        color: '#FFF',
                                        mb: '8px'
                                    }}>
                                    {b.title}
                                </Typography>
                                <Typography
                                    variant="h1"
                                    component="div"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        color: '#FFF',
                                        mb: '16px'
                                    }}>
                                    {b.desc1}
                                </Typography>
                                {b.desc2.map((data, index) => {
                                    return (
                                        <Typography
                                            key={index}
                                            variant="h1"
                                            component="div"
                                            color="text.secondary"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                color: '#FFF',
                                                mb: '12px'
                                            }}>
                                            {data.title}
                                        </Typography>
                                    )
                                })}
                                <Typography
                                    key={index}
                                    variant="h1"
                                    component="div"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: '20px',
                                        color: '#FFF',
                                        mb: '24px',
                                        textDecoration: "underline"
                                    }}>
                                    Share price: 589$
                                </Typography>
                                <FlexBox>
                                    <StyledButton sx={{mr:'20px'}}>Invest here</StyledButton>
                                    <StyledButton>Sell shares</StyledButton>
                                </FlexBox>
                            </ContentWrapper>
                        )
                    })}

                </GridBox>
                <OtherFundWrapper>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 300,
                            fontSize: '20px',
                            color: '#FFF',
                            mb: '24px',
                        }}>
                        The return on funds as a whole is higher than the average return on one bottle per year by:
                    </Typography>
                    <Typography
                        variant="h1"
                        component="div"
                        color="text.secondary"
                        sx={{
                            fontWeight: 700,
                            fontSize: '72px',
                            color: '#FFF',
                            mb: '24px',
                        }}>
                        41%
                    </Typography>
                </OtherFundWrapper>
            </FlexBox>
        </Box>


    )
}

export default MainContent


const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
`
const ContentWrapper = styled.div<ContentWrapperProps>`
  background-image: url(${props => props.bgImg});
  padding: 28px 20px;
  background-size: cover;
  background-repeat: no-repeat;
`
const OtherFundWrapper = styled.div`
  background: url(${require("../../../../assets/img/other-fund.png")});
  padding: 28px 20px;
  background-size: cover;
  background-repeat: no-repeat;
  
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`

const StyledButton = styled(Button)`
  background-color: #FFF;
  color: #000
`