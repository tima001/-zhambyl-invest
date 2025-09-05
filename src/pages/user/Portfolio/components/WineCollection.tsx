import React from 'react'
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import {H4} from "../../../../layouts/TextStyles";
import {WineCollectionInMarket} from "../../../../utils/constants";
import {Box} from "@mui/system";


const WineCollection = () => {

    const content = [
        {
            title: "Separate bottles investments:",
        }
    ]

    return (
        <Box>
            <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}> {content[0].title}</H4>

            <GridBox>
                {WineCollectionInMarket.map((b, index) => {
                    return (
                        <WineWrapper key={index} >
                            <Box sx={{display: 'flex', justifyContent: "center", mb: '24px'}}>
                                <img alt="wine" src={b.wine} width={210}/>
                            </Box>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '30px',
                                    color: '#E0E0E0',
                                    mb: '8px',
                                    position: 'absolute',
                                    top: "8px",
                                    right: "16px"
                                }}
                            >
                                {b.count}
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    color: '##525252',
                                    mb: '8px'
                                }}
                            >
                                {b.title}
                            </Typography>
                            <FlexBox>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        color: '##525252',
                                    }}
                                >
                                    {b.city}
                                </Typography>
                                <img alt="flag" src={b.flag} width={32}/>
                            </FlexBox>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '##525252',
                                    mb: '8px'

                                }}
                            >
                                Color: <AnswerText>white</AnswerText>
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '##525252',
                                    mb: '8px'
                                }}
                            >
                                Wine type: <AnswerText>Antinori</AnswerText>
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '##525252',
                                    mb: '8px'
                                }}
                            >
                                Last price: <AnswerText>986€</AnswerText>
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '##525252',
                                    mb: '8px'
                                }}
                            >
                                Last month price: <AnswerText>-12,34%</AnswerText> <img alt="arrow-down" width={18} src={b.arrowDown}/>
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '##525252',
                                    mb: '8px'
                                }}
                            >
                                Last 3 months price: <AnswerText>9,34%</AnswerText> <img alt="arrow-top" width={18} src={b.arrowTop}/>
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: '18px',
                                    color: '##525252',
                                    mb: '24px'
                                }}
                            >
                                Last 12 months price: <AnswerText>28,23%</AnswerText> <img alt="arrow-top" width={18} src={b.arrowTop}/>
                            </Typography>
                            <Button variant="contained" fullWidth>Add to investments</Button>

                        </WineWrapper>
                    )
                })}
            </GridBox>

        </Box>


    )
}

export default WineCollection


const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`
const WineWrapper = styled.div`
  background-color: #FFF;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px
`
const AnswerText = styled.span`
  font-size: 18px;
  font-weight: 400;
`
