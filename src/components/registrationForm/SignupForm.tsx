import React, { useState } from 'react'
import { useIntl } from 'react-intl'
import styled from '@emotion/styled'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    useTheme,
} from '@mui/material'
import {Body1, H3} from '../../layouts/TextStyles'
import CustomInput from '../muiComponents/customInput/CustomInput'
import logo from '../../assets//img/Logo.png'
import Arrow from "../../assets/img/back-arrow.png";
import {useNavigate} from "react-router-dom";


interface Props {
    toggleForm: () => void
}


const SignupForm: React.FC<Props> = ({ toggleForm }) => {
    const theme = useTheme()
    const styles = {
        logo: {
            width: 150,
            height: 22,
            margin: '0 auto 32px',
        },
        radioGroup: {
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 16,
        },
        smsCodeBox: {
            mt: 4,
            width: '760px',
            display: 'grid',
            justifyContent: 'center',
            background: 'white',
            borderRadius: 1,
            padding: 4,
            textAlign: 'center',
        },
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
        },
        flexRowCenter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        fullWidth: {
            width: '100%',
        },
        toggleSpan: {
            color: theme.palette.primary.main,
            marginLeft: 4,
            cursor: 'pointer',
        },
    }
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const [showPassword, setShowPassword] = useState(false)


    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault()
    }

    return (
        <Box mt="10px">
            <Wrapper >
                <FlexBox>
                    <Box sx={{display: "flex", gap: '8px', alignItems: "center", cursor: 'pointer'}}  onClick={() => navigate('/')}>
                        <img alt="arrow" src={Arrow} width={18} height={16}/>
                        <Body1 color={theme.palette.secondary.main}>{formatMessage({id: "goBack"})}</Body1>
                    </Box>
                    <Body1 style={{cursor: 'pointer'}} color={theme.palette.secondary.main} onClick={() => navigate('/login')}>{formatMessage({id: "login"})}</Body1>

                </FlexBox>
                <img
                    alt="logo"
                    src={logo}
                    style={{width: 170, height: 98, margin: '0 auto 12px'}}
                />

                <H3 color="#525252" style={{margin: '0 auto '}}>{formatMessage({id: "registration"})}</H3>


                <Box sx={styles.flexRow}>
                    <Box
                        sx={styles.fullWidth}
                        mr={4}
                    >
                        <CustomInput
                            label={formatMessage({id: "fullName"})}
                            fullWidth
                            color="secondary"

                        />
                    </Box>

                    <Box sx={styles.fullWidth}>
                        <CustomInput
                            label={formatMessage({id: "phoneNumber"})}
                            fullWidth
                            color="secondary"

                        />
                    </Box>
                </Box>

                <Box
                    sx={styles.flexRow}
                    mb={4}
                >
                    <Box
                        sx={styles.fullWidth}
                        mr={4}
                    >
                        <CustomInput
                            label={formatMessage({id: "email"})}
                            fullWidth
                            color="secondary"

                        />
                    </Box>

                    <Box sx={styles.fullWidth}>
                        <CustomInput
                            placeholder={formatMessage({
                                id: 'password_confirm',
                            })}
                            color="secondary"
                            type={showPassword ? 'text' : 'password'}
                            label={formatMessage({id: "password"})}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    size="large"
                >

                    {formatMessage({id: "createAccount"})}
                </Button>

            </Wrapper>
        </Box>
    )
}

export default SignupForm

const Wrapper = styled.form`
  background-color: #E4E5E8;
  border: 1px solid #C7C7C7;
  margin-top: 160px;
  width: 600px;
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