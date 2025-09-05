import React, {useState} from 'react'
import styled from '@emotion/styled'
import {useNavigate} from 'react-router-dom'
import {
    Button,
    InputAdornment,
    IconButton, Box,
} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import logo from '../../assets//img/Logo.png'
import {Body1, H3} from '../../layouts/TextStyles'
import {useAppDispatch, } from '../../app/hooks'
import {resetError} from '../../features/user/userSlice'
import CustomInput from '../muiComponents/customInput'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import Arrow from "../../assets/img/back-arrow.png"
import {useIntl} from "react-intl";

const LoginForm = ({toggleForm}) => {
    const theme = useTheme()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [loginInfo, setLoginInfo] = useState({username: '', password: ''})
    const [showPassword, setShowPassword] = useState(false)
    const {formatMessage} = useIntl()

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
            navigateToPage()
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(resetError())
        setLoginInfo({...loginInfo, username: e.target.value})
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(resetError())
        setLoginInfo({...loginInfo, password: e.target.value})
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault()
    }

    const navigateToPage = () => {
            navigate('/account')
    }

    return (
        <Wrapper onSubmit={submitForm}>
            <FlexBox>
                <Box sx={{display: "flex", gap: '8px', alignItems: "center", cursor: 'pointer'}}  onClick={() => navigate('/')}>
                    <img src={Arrow} width={18} height={16} alt="arrow"/>
                    <Body1 color={theme.palette.secondary.main}>{formatMessage({id: "goBack"})}</Body1>
                </Box>
                <Body1 style={{cursor: 'pointer'}} color={theme.palette.secondary.main} onClick={() => navigate('/sign-up')}>{formatMessage({id: "registration"})}</Body1>

            </FlexBox>
            <img
                alt="logo"
                src={logo}
                style={{width: 170, height: 98, margin: '0 auto 12px'}}
            />

            <H3 color="#525252" style={{margin: '0 auto '}}>{formatMessage({id: "login"})}</H3>


            <CustomInput
                label={formatMessage({id: "emailOrPhoneNumber"})}
                color="secondary"
                onChange={handleName}
            />

            <CustomInput
                type={showPassword ? 'text' : 'password'}
                label={formatMessage({id: "password"})}
                color="secondary"
                onChange={handlePassword}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff/>
                                ) : (
                                    <Visibility/>
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <div style={{margin: '16px 0'}}>
                <Body1 color={theme.palette.secondary.main}>{formatMessage({id: "forgetPassword"})}</Body1>
            </div>

            <Button
                variant="contained"
                size="large"
                type="submit"
            >
                {formatMessage({id: "login"})}
            </Button>
        </Wrapper>
    )
}

export default LoginForm

const Wrapper = styled.form`
  background-color: #E4E5E8;
  border: 1px solid #C7C7C7;
  margin-top: 160px;
  width: 500px;
  min-height: 450px;
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  text-align: left;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`
