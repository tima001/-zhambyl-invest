import React from 'react'
import styled from '@emotion/styled'
import LogoImg from '../../assets/img/Logo.png'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import Typography from "@mui/material/Typography";
import {LandingNavBarContentText} from "../../utils/constants";
import LanguageMenu from "../muiComponents/languageMenu";
import {useIntl} from 'react-intl'

const NavBar = () => {
    const navigate = useNavigate()
    const {formatMessage} = useIntl()

    return (
        <Wrapper>
            <FlexBox>
                <Container>
                    <Link to="/" style={{marginRight: '36px'}}>
                        <Logo src={LogoImg} alt={"logo"}/>
                    </Link>
                    {LandingNavBarContentText.map((b, i) => {
                        const hasDropdown = !!b.dropdown;
                        return (
                            <MenuItem key={i}>
                                {/* Заголовок, кликабельный только если нет dropdown */}
                                {!hasDropdown && b.link ? (
                                    <Link to={b.link} style={{textDecoration: 'none', color: 'inherit'}}>
                                        <Typography
                                            variant="caption"
                                            component="div"
                                            sx={{
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                height: '100%',
                                                alignContent: 'center',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {formatMessage({id: b.title})}
                                        </Typography>
                                    </Link>
                                ) : (
                                    <Typography
                                        variant="caption"
                                        component="div"
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            height: '100%',
                                            alignContent: 'center',
                                            cursor: 'default'
                                        }}
                                    >
                                        {formatMessage({id: b.title})}
                                    </Typography>
                                )}

                                {/* Dropdown */}
                                {hasDropdown && (
                                    <Dropdown className="dropdown">
                                        {b.dropdown.map((sub, j) => (
                                            <React.Fragment key={j}>
                                                {!sub.children ? (
                                                    <Link to={sub.link}
                                                          style={{textDecoration: 'none', color: 'inherit'}}>
                                                        <DropdownItem>{formatMessage({id: sub.name})}</DropdownItem>
                                                    </Link>
                                                ) : (
                                                    <DropdownItem hasChildren>
                                                        <Typography
                                                            variant="caption"
                                                            component="div"
                                                            sx={{
                                                                fontWeight: 700,
                                                                fontSize: '16px',
                                                                color: '#404040'
                                                            }}
                                                        >
                                                            {formatMessage({id: sub.name})}
                                                        </Typography>
                                                    </DropdownItem>
                                                )}

                                                {sub.children && (
                                                    <SubDropdown>
                                                        {sub.children.map((child, k) => (
                                                            <Link
                                                                key={k}
                                                                to={child.link}
                                                                style={{textDecoration: 'none', color: 'inherit'}}
                                                            >
                                                                <SubDropdownItem>- {formatMessage({id: child.name})}</SubDropdownItem>
                                                            </Link>
                                                        ))}
                                                    </SubDropdown>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </Dropdown>
                                )}
                            </MenuItem>
                        );
                    })}

                </Container>

                <LanguageMenu/>

            </FlexBox>

        </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.13);

    @media screen and (max-width: 500px) {
        display: none;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 4px;
`

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    max-width: 1400px;
`
const Logo = styled.img`
    width: 140px;
`
const MenuItem = styled.div`
    position: relative;
    cursor: pointer;
    padding: 0 20px;
    height: 100%;
    align-items: center;

    &:hover {
        background: #E5BE7B;
    }

    &:hover .dropdown {
        display: block;
    }


,

`;

const Dropdown = styled.div`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #f8f8f8;
    min-width: 200px;
    white-space: nowrap;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    padding: 10px 0;
    z-index: 999;
`;

interface DropdownItemProps {
    hasChildren?: boolean;
}

const DropdownItem = styled.div<DropdownItemProps>`
    padding: 12px 16px;
    cursor: ${(props) => (props.hasChildren ? "default" : "pointer")};

    &:hover {
        background: ${(props) => (props.hasChildren ? "transparent" : "#E5BE7B")};
    }
`;

const SubDropdown = styled.div`
`;

const SubDropdownItem = styled.div`
    padding: 12px 24px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background: #E5BE7B;
    }
`;