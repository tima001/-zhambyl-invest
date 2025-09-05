import React, {useState} from 'react'
import Navbar from "../../../components/navbar/NavBar";
import styled from "@emotion/styled";
import Footer from '../../Home/Footer/Footer';
import { H4} from "../../../layouts/TextStyles";
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import {CaretDown} from "@phosphor-icons/react";
import {SupportQuestionsAndAnswers} from '../../../utils/constants';
import {Box} from "@mui/system";
import avatar from "../../../assets/img/avatar.png";
import SupportDialog from "./components/SupportDialog";

const Support = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    return (
            <Wrapper>
                <Navbar/>
                <Main>
                    <Box>
                        <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}>Support and FAQ</H4>

                        {SupportQuestionsAndAnswers.map((faq, index) => (
                            <Accordion
                                style={{backgroundColor: "#FFF", boxShadow: "none", marginBottom: '16px'}}
                                key={index}
                                sx={{"&.MuiAccordion-root:before": {backgroundColor: "rgba(0, 0, 0, 0)"}}}
                            >
                                <AccordionSummary
                                    sx={{border: "none"}}
                                    expandIcon={<CaretDown size={24} color="#B2B2B2"/>}
                                >
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        color="text.secondary"
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            color: '#525252',
                                        }}
                                    >{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{backgroundColor: "#F1F3F6"}}>
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        color="text.secondary"
                                        sx={{
                                            fontWeight: 300,
                                            fontSize: '20px',
                                            color: '#525252',
                                        }}
                                    >{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>

                    <Box>
                        <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}>Personal manager</H4>

                        <CardWrapper>
                            <Typography
                                component="div"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: '26px',
                                    color: '#000000',
                                    mb: '20px'
                                }}
                            >Andje Seurhio </Typography>
                            <FlexBox>
                                <StyledImg src={avatar}/>
                                <Box sx={{ml: '30px'}}>
                                    <Box sx={{mb: '24px'}}>
                                        <Typography
                                            component="div"
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '22px',
                                                color: '#000000',
                                                mb: "8px"
                                            }}
                                        >
                                            (+44 038 455 333)
                                        </Typography>
                                        <Typography
                                            component="div"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '20px',
                                                color: '#000000',
                                            }}
                                        >
                                            Certified sommelier, WSET Investments advanced, passion for fine
                                            wine.Certified
                                            sommelier, WSET Investments advanced, passion for fine wine.Certified
                                            sommelier,
                                            WSET
                                            Investments advanced, passion for fine wine..
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <StyledButton sx={{mr: '20px'}} variant="outlined" color="secondary"
                                                      size="medium" onClick={() => handleOpenDialog()}>Leave a
                                            message</StyledButton>
                                        <StyledButton variant="outlined" color="secondary" size="medium">Request a
                                            call</StyledButton>

                                    </Box>

                                </Box>

                            </FlexBox>
                        </CardWrapper>

                    </Box>
                    <SupportDialog
                        open={openDialog}
                        handleClose={() => setOpenDialog(false)}
                    />


                </Main>

                <Footer/>

            </Wrapper>


    )
}

export default Support

const Wrapper = styled.div`
  background-color: #F1F3F6;
  min-height: 100vh;
  height: 100%;
`

const Main = styled.main`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 40px;
`

const CardWrapper = styled.div`
  background-color: #E2E7EE;
  border: 1px solid #A2A2A2;
  border-radius: 4px;
  padding: 20px;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
`

const StyledImg = styled.img`
  max-width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 100px;
`
const StyledButton = styled(Button)`
  border-color: #000;
  background-color: #FFF;
  color: #000;
  text-transform: capitalize;
`
