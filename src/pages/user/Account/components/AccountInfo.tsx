import React from 'react'
import {useIntl} from 'react-intl'
import styled from "@emotion/styled";
import {Box, Button} from '@mui/material';
import {Body1, H2, H4, Caption, BoldText} from "../../../../layouts/TextStyles";
import grapeForWine from "../../../../assets/img/grape-for-wine.png"
import avatar from "../../../../assets/img/avatar.png"
import {WineAccountDescriptionText} from "../../../../utils/constants";
import AccountTable from './AccountTable';

const AccountInfo = () => {
    const {formatMessage} = useIntl()

    return (

        <Box>
            <GridBox style={{marginBottom: '40px'}}>
                <Box style={{display: "flex", flexDirection: 'column', justifyContent: 'space-between'}}>
                    <BalanceWrapper style={{backgroundColor: '#1F1F1F'}}>
                        <Body1 color="#fff" style={{marginBottom: '14px'}}>
                            Est. account balance
                        </Body1>
                        <H2 color="#fff" style={{marginBottom: '38px'}}>€0,000.00</H2>
                        <FlexBox>
                            <Button variant="contained" size="medium">Add funds</Button>
                            <Button variant="outlined" size="medium">Withdrawal</Button>
                        </FlexBox>
                    </BalanceWrapper>
                    <BalanceWrapper style={{padding: 0}}>
                        <Title>Personal settings</Title>
                        <FlexBox>
                            <Body1>Full name:</Body1>
                            <Caption>Julian Leiugher</Caption>
                        </FlexBox>
                        <FlexBox>
                            <Body1>Mobile number: </Body1>
                            <Caption>+44 038 455 333</Caption>
                        </FlexBox>
                        <FlexBox>
                            <Body1>Country:</Body1>
                            <Caption>France</Caption>
                        </FlexBox>
                        <FlexBox style={{marginBottom: '16px'}}>
                            <Body1>Email:</Body1>
                            <Caption>julileigh@gmail.fr</Caption>
                        </FlexBox>
                        <StyledButton variant="outlined" size="small" color="secondary">Change password</StyledButton>
                    </BalanceWrapper>

                    <BalanceWrapper style={{backgroundColor: '#FFF', border: "1px solid #D9D9D9"}}>
                        <Title>Your manager </Title>
                        <FlexBox>
                            <StyledImg src={avatar}/>
                            <Box>
                                <FlexBox style={{marginBottom: '0px'}}>
                                    <Body1>Andje Seurhio </Body1>
                                    <Caption>(+44 038 455 333)</Caption>
                                </FlexBox>
                                <Body1>Certified sommelier, WSET Investments advanced, passion for fine wine. </Body1>
                            </Box>

                        </FlexBox>

                    </BalanceWrapper>


                </Box>

                <WineMarkerWrapper>
                    <Title>Wine market news </Title>
                    <Body1 style={{marginBottom: '24px'}}>
                        {WineAccountDescriptionText[0].desc}
                    </Body1>
                    <img src={grapeForWine} alt='wine image' width={654} height={267}
                         style={{objectFit: 'cover', marginBottom: '24px'}}/>
                    <Body1 style={{marginBottom: '24px'}}>
                        {WineAccountDescriptionText[1].desc}
                    </Body1>
                </WineMarkerWrapper>

            </GridBox>
            <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}>Last deals and trade history</H4>
            <AccountTable/>
        </Box>

    )
}

export default AccountInfo

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  width: 100%;
  gap: 40px;
`
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`
const BalanceWrapper = styled.div`
  padding: 26px 32px;
  border-radius: 5px;
`

const WineMarkerWrapper = styled.div`
  background-color: #FFFFFF;
  padding: 22px 26px;
  border-radius: 5px;
`
const StyledButton = styled(Button)`
  border-radius: 7px;
  background-color: #EEEEEE;
  border: 1px solid #A5A5A5;
  color: #444444;
`
const StyledImg = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 100px;
`

const Title = styled(H4)`
margin-bottom: 16px;
  text-decoration: underline;
`