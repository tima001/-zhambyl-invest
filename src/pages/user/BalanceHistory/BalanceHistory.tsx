import React from 'react'
import Navbar from "../../../components/navbar/NavBar";
import styled from "@emotion/styled";
import Footer from '../../Home/Footer/Footer';
import {H4} from "../../../layouts/TextStyles";
import BalaneHistoryTable from "./components/BalaneHistoryTable";

const BalanceHistory = () => {

    return (
        <Wrapper>
            <Navbar/>
            <Main>
                <H4 style={{marginBottom: '16px', textDecoration: 'underline'}}>My deposit and withdrawals history</H4>
                <BalaneHistoryTable/>
            </Main>
            <Footer/>
        </Wrapper>

    )
}

export default BalanceHistory

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

