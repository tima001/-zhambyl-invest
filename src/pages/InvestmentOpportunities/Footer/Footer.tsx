import React from "react";
import styled from "@emotion/styled";
import {Box, useTheme} from "@mui/material";
import {useIntl} from "react-intl";
import {Body1, BoldText, H5} from "../../../layouts/TextStyles2";
import LogoImgInverted from '../../../assets/img/logo-inverted.png'
import Ornament from '../../../assets/img/ornament.png'

const Footer = () => {
    const {formatMessage} = useIntl()
    const theme = useTheme()

    return (
        <BoxWrapper>
            <OrnamentImg/>
            <Box sx={{
                background: '#F3BF78',
                justifyContent: 'center', display: 'flex'}}>
                <FooterBox>
                    <FooterContainer>
                        <Wrapper>
                            <FooterLogo>
                                <FooterLogoImg src={LogoImgInverted}/>
                            </FooterLogo>
                            <FooterContactItemWrapper>
                                <FooterContactItem>
                                    <Box sx={{width: '24px', height: '24px'}}>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path
                                                d="M21.5 5.46533H3.5C3.30109 5.46533 3.11032 5.54435 2.96967 5.685C2.82902 5.82565 2.75 6.01642 2.75 6.21533V18.9653C2.75 19.3632 2.90804 19.7447 3.18934 20.026C3.47064 20.3073 3.85218 20.4653 4.25 20.4653H20.75C21.1478 20.4653 21.5294 20.3073 21.8107 20.026C22.092 19.7447 22.25 19.3632 22.25 18.9653V6.21533C22.25 6.01642 22.171 5.82565 22.0303 5.685C21.8897 5.54435 21.6989 5.46533 21.5 5.46533ZM9.75312 12.9653L4.25 18.0091V7.92158L9.75312 12.9653ZM10.8594 13.9872L11.9937 15.0185C12.132 15.1449 12.3126 15.2151 12.5 15.2151C12.6874 15.2151 12.868 15.1449 13.0062 15.0185L14.1406 13.9872L19.5687 18.9653H5.43125L10.8594 13.9872ZM15.2469 12.9653L20.75 7.92158V18.0091L15.2469 12.9653Z"
                                                fill="black"/>
                                        </svg>
                                    </Box>
                                    <Body1 style={{color: '#000'}}>zhambyl.invest@gmail.com</Body1>
                                </FooterContactItem>
                                <FooterContactItem>
                                    <Box sx={{width: '24px', height: '24px'}}>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path
                                                d="M12.5 15.9653C14.1569 15.9653 15.5 14.6222 15.5 12.9653C15.5 11.3085 14.1569 9.96533 12.5 9.96533C10.8431 9.96533 9.5 11.3085 9.5 12.9653C9.5 14.6222 10.8431 15.9653 12.5 15.9653Z"
                                                fill="black"/>
                                            <path
                                                d="M16.625 3.59033H8.375C6.98261 3.59033 5.64726 4.14346 4.66269 5.12802C3.67812 6.11259 3.125 7.44795 3.125 8.84033V17.0903C3.125 18.4827 3.67812 19.8181 4.66269 20.8026C5.64726 21.7872 6.98261 22.3403 8.375 22.3403H16.625C18.0174 22.3403 19.3527 21.7872 20.3373 20.8026C21.3219 19.8181 21.875 18.4827 21.875 17.0903V8.84033C21.875 7.44795 21.3219 6.11259 20.3373 5.12802C19.3527 4.14346 18.0174 3.59033 16.625 3.59033ZM12.5 17.4653C11.61 17.4653 10.74 17.2014 9.99993 16.7069C9.25991 16.2125 8.68314 15.5097 8.34254 14.6874C8.00195 13.8651 7.91283 12.9603 8.08647 12.0874C8.2601 11.2145 8.68868 10.4127 9.31802 9.78335C9.94736 9.15402 10.7492 8.72543 11.6221 8.5518C12.495 8.37817 13.3998 8.46728 14.2221 8.80787C15.0443 9.14847 15.7471 9.72524 16.2416 10.4653C16.7361 11.2053 17 12.0753 17 12.9653C17 14.1588 16.5259 15.3034 15.682 16.1473C14.8381 16.9912 13.6935 17.4653 12.5 17.4653ZM17.375 9.21533C17.1525 9.21533 16.935 9.14935 16.75 9.02574C16.565 8.90212 16.4208 8.72642 16.3356 8.52085C16.2505 8.31528 16.2282 8.08908 16.2716 7.87086C16.315 7.65263 16.4222 7.45217 16.5795 7.29484C16.7368 7.1375 16.9373 7.03036 17.1555 6.98695C17.3738 6.94354 17.6 6.96582 17.8055 7.05097C18.0111 7.13612 18.1868 7.28031 18.3104 7.46532C18.434 7.65032 18.5 7.86783 18.5 8.09033C18.5 8.3887 18.3815 8.67485 18.1705 8.88583C17.9595 9.09681 17.6734 9.21533 17.375 9.21533Z"
                                                fill="black"/>
                                        </svg>
                                    </Box>
                                    <Body1 style={{color: '#000'}}>zhambyl_invest</Body1>
                                </FooterContactItem>
                                <FooterContactItem>
                                    <Box sx={{width: '24px', height: '24px'}}>
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                                            <path
                                                d="M12.5 2.46533C10.3127 2.46781 8.21575 3.3378 6.66911 4.88444C5.12247 6.43108 4.25248 8.52806 4.25 10.7153C4.25 17.7747 11.75 23.1091 12.0688 23.3341C12.1965 23.4191 12.3465 23.4645 12.5 23.4645C12.6535 23.4645 12.8035 23.4191 12.9313 23.3341C13.25 23.1091 20.75 17.7747 20.75 10.7153C20.7475 8.52806 19.8775 6.43108 18.3309 4.88444C16.7843 3.3378 14.6873 2.46781 12.5 2.46533ZM12.5 7.71533C13.0933 7.71533 13.6734 7.89128 14.1667 8.22092C14.6601 8.55057 15.0446 9.0191 15.2716 9.56728C15.4987 10.1155 15.5581 10.7187 15.4424 11.3006C15.3266 11.8825 15.0409 12.4171 14.6213 12.8367C14.2018 13.2562 13.6672 13.5419 13.0853 13.6577C12.5033 13.7734 11.9001 13.714 11.3519 13.487C10.8038 13.2599 10.3352 12.8754 10.0056 12.382C9.67595 11.8887 9.5 11.3087 9.5 10.7153C9.5 9.91968 9.81607 9.15662 10.3787 8.59401C10.9413 8.0314 11.7044 7.71533 12.5 7.71533Z"
                                                fill="black"/>
                                        </svg>
                                    </Box>
                                    <Body1 style={{color: '#000'}}>Жамбылская область, г. Тараз, проспект Абая
                                        127</Body1>
                                </FooterContactItem>
                            </FooterContactItemWrapper>
                        </Wrapper>

                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px'}}>
                            <BoldText style={{textAlign: 'right', fontSize: '16px', fontWeight: 700, color: '#000'}}>
                                Zhambyl Invest в социальных сетях:
                            </BoldText>
                            <SocialButtonsWrapper>
                                <SocialButton
                                    onClick={() => window.open('https://www.instagram.com/zhambyl_invest?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}>
                                    <Box sx={{width: '28px', height: '28px'}}>
                                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
                                            <path
                                                d="M14.576 18C16.509 18 18.076 16.433 18.076 14.5C18.076 12.567 16.509 11 14.576 11C12.6431 11 11.076 12.567 11.076 14.5C11.076 16.433 12.6431 18 14.576 18Z"
                                                fill="black"/>
                                            <path
                                                d="M19.3885 3.5625H9.76355C8.1391 3.5625 6.58118 4.20781 5.43252 5.35647C4.28386 6.50513 3.63855 8.06305 3.63855 9.6875V19.3125C3.63855 20.937 4.28386 22.4949 5.43252 23.6435C6.58118 24.7922 8.1391 25.4375 9.76355 25.4375H19.3885C21.013 25.4375 22.5709 24.7922 23.7196 23.6435C24.8682 22.4949 25.5135 20.937 25.5135 19.3125V9.6875C25.5135 8.06305 24.8682 6.50513 23.7196 5.35647C22.5709 4.20781 21.013 3.5625 19.3885 3.5625ZM14.576 19.75C13.5377 19.75 12.5227 19.4421 11.6593 18.8652C10.7959 18.2883 10.123 17.4684 9.72568 16.5091C9.32832 15.5498 9.22436 14.4942 9.42693 13.4758C9.6295 12.4574 10.1295 11.5219 10.8637 10.7877C11.598 10.0535 12.5334 9.55345 13.5518 9.35088C14.5702 9.14831 15.6258 9.25227 16.5851 9.64963C17.5444 10.047 18.3644 10.7199 18.9413 11.5833C19.5181 12.4466 19.826 13.4616 19.826 14.5C19.826 15.8924 19.2729 17.2277 18.2884 18.2123C17.3038 19.1969 15.9684 19.75 14.576 19.75ZM20.2635 10.125C20.004 10.125 19.7502 10.048 19.5344 9.9038C19.3185 9.75958 19.1503 9.5546 19.051 9.31477C18.9516 9.07494 18.9256 8.81104 18.9763 8.55644C19.0269 8.30184 19.1519 8.06798 19.3355 7.88442C19.519 7.70087 19.7529 7.57586 20.0075 7.52522C20.2621 7.47458 20.526 7.50057 20.7658 7.59991C21.0056 7.69925 21.2106 7.86748 21.3549 8.08331C21.4991 8.29915 21.576 8.55291 21.576 8.8125C21.576 9.1606 21.4378 9.49444 21.1916 9.74058C20.9455 9.98672 20.6116 10.125 20.2635 10.125Z"
                                                fill="black"/>
                                        </svg>
                                    </Box>
                                </SocialButton>
                            </SocialButtonsWrapper>
                        </Box>
                    </FooterContainer>

                    <Box sx={{width: '100%', height: '1px', backgroundColor: '#717171'}}/>
                </FooterBox>
            </Box>

        </BoxWrapper>

    )
}

export default Footer

const BoxWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FooterBox = styled.div`
    max-width: 1400px;
    width: 100%;
    gap: 36px;
    display: flex;
    flex-direction: column;
    padding: 24px 0;
`
const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const FooterLogo = styled.div`
    display: flex;
    alignItems: center;
    gap: 15px
`
const FooterLogoImg = styled.img`
    width: 236px;
    height: 92px;
    borderRadius: 11px;
    backgroundColor: theme.palette.grey [300]

`
const OrnamentImg = styled.div`
    height: 32px;
    border-radius: 11px;
    background-image: url(${Ornament});
    background-repeat: repeat;  /* чтобы плиткой */
    background-size: auto 100%;
    background-position: center;
    width: 100%;      

`;
const FooterContactItem = styled.div`
    display: flex;
    alignItems: center;
    gap: 8px;
`
const FooterContactItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: start;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const SocialButtonsWrapper = styled.div`
    display: flex;
    alignItems: flex-start;
    gap: 13.962px
`
const SocialButton = styled.div`
    display: flex;
    padding: 12px;
    borderRadius: 8px;
    border: 1px solid #000;
    backgroundColor: rgba(255, 255, 255, 0.30);
    cursor: pointer;
`