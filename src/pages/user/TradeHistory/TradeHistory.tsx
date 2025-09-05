import React from 'react'
import Navbar from "../../../components/navbar/NavBar";
import styled from "@emotion/styled";
import Footer from '../../Home/Footer/Footer';
import {H4} from "../../../layouts/TextStyles";
import TradeHistoryTable from "./components/TradeHistoryTable";

const TradeHistory = () => {

    return (
        <Wrapper>
            <Navbar/>
            <Main>
                <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}>My deals and trade history</H4>
                <TradeHistoryTable/>
            </Main>
            <Footer/>
        </Wrapper>

    )
}

export default TradeHistory

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

