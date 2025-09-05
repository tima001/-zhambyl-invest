import React from 'react'
import Navbar from "../../../components/navbar/NavBar";
import styled from "@emotion/styled";
import Footer from '../../Home/Footer/Footer';
import MainContent from "./components/MainContent";
import WineCollection from "./components/WineCollection";

const Portfolio = () => {

    return (
        <Wrapper>
            <Navbar/>
            <Main>
               <MainContent/>
                <WineCollection/>
            </Main>
            <Footer/>
        </Wrapper>

    )
}

export default Portfolio

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
