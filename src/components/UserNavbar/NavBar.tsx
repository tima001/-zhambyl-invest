import React from 'react'
import styled from '@emotion/styled'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import {NavBarContentText} from "../../utils/constants";
import LanguageMenu from "../muiComponents/languageMenu";

const NavBar = () => {
    const navigate = useNavigate()

    return (
        <Wrapper>
            <Container>
                <Link to="/">
                    <img width={118} height={68} src={Logo} alt={"logo"}/>
                </Link>
                <FlexBox>
                    {NavBarContentText.map(b => {
                        return(
                            <Typography
                                key={b.title}
                                variant="caption"
                                component="div"
                                color="text.secondary"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    color: (theme) => theme.palette.grey[900],
                                }}
                            >
                                {b.title}
                            </Typography>
                        )
                    })}
                    <LanguageMenu/>

                </FlexBox>

                    <Button
                        size="medium"
                        variant={'outlined'}
                        color={"secondary"}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </Button>

            </Container>
        </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    background: white;
    height: 92px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Container = styled.div`
    max-width: 1340px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1380px) {
        padding: 0 20px;
    }
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 36px;
`

