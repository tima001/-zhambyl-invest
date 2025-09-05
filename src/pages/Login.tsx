import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import LoginForm from '../components/loginForm/LoginForm'
import SignupForm from '../components/registrationForm/SignupForm'

const Login = (showLoginPage) => {
    const [showLogin, setShowLogin] = useState(true)

    const toggleForm = () => {
        setShowLogin(!showLogin)
    }

    useEffect(() => {
        setShowLogin(showLoginPage.showLoginPage)
    }, [showLoginPage])

    const SignForm = () => {
        if (showLogin) return <LoginForm toggleForm={toggleForm} />

        return <SignupForm toggleForm={toggleForm} />
    }
    return (
        <Wrapper>
            <Main>
                <SignForm />
            </Main>
        </Wrapper>
    )
}

export default Login

const Wrapper = styled.div`
  background: url(${require("../assets/img/login.png")});
  min-height: 100vh;
  height: 100%;
  background-size: cover;

`

const Main = styled.main`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
