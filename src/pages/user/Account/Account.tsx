import React from 'react'
import Navbar from "../../../components/navbar/NavBar";
import styled from "@emotion/styled";
import AccountInfo from "./components/AccountInfo";
import Footer from '../../Home/Footer/Footer';

const Account = () => {

    return (
        <Wrapper>
            <Navbar/>
            <Main >
                <AccountInfo/>
            </Main>
            <Footer/>
        </Wrapper>

    )
}

export default Account

const Wrapper = styled.div`
  background-color: #F1F3F6;
  min-height: 100vh;
  height: 100%;
`

const Main = styled.main`
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px 40px ;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  width: 100%;
  gap: 40px;
`
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`
const BalanceWrapper = styled.div`
  background-color: #1F1F1F;
  padding: 26px 32px;
  border-radius: 5px;
`