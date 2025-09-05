import React from 'react'
import LandingNavBar from '../../components/landingNavbar'

import styled from "@emotion/styled";
import Footer from "./Footer/Footer";

const Home = () => {



    return (
        <Wrapper>
            <LandingNavBar/>
            <Main>
            </Main>
            <Footer />


        </Wrapper>

    )
}


export default Home

const Main = styled.main`
    height: 100%;
    justify-content: center;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin: 24px 0;
`

const Wrapper = styled.div`
    background-color: #fff;
    min-height: 100vh;
    height: 100%;
    overflow-x: hidden;
`
