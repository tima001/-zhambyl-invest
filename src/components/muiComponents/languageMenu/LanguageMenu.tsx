import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { lang, setLanguage } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { Box } from '@mui/system'
import arrow from "../../../assets/img/arrow-down.png"

export default function LanguageMenu() {
    const dispatch = useAppDispatch()
    const language = useAppSelector(lang)
    const [open, setOpen] = React.useState(false)
    const anchorRef = React.useRef<HTMLButtonElement>(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return
        }
        setOpen(false)
    }

    const handleClick = (option: string) => {
        dispatch(setLanguage(option))
        setOpen(false)
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    const prevOpen = React.useRef(open)
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus()
        }
        prevOpen.current = open
    }, [open])

    const ButtonText = () => {
        let text = ""
        if (language === 'en') text = 'Eng'
        if (language === 'kz') text = 'Қаз'
        if (language === 'ru') text = 'Рус'

        return (
            <Button
                variant="text"
                color="secondary"
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ textTransform: 'none', fontSize:'16px' }}
            >
                <img src={arrow} width={16} style={{marginRight: '8px'}} alt="arrow down"/>
                {text}
            </Button>
        )
    }

    return (
        <div>
            <Box
                sx={{
                    display: 'grid',
                    alignItems: 'center',
                    gridTemplateColumns: '84px auto',
                    justifyContent: 'space-between',
                    m: '0',
                }}
            >
                {ButtonText()}
            </Box>

            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start'
                                    ? 'left top'
                                    : 'left bottom',
                        }}
                    >
                        <Paper sx={{ borderRadius: 2 }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={() => handleClick('en')}>
                                        English
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClick('kz')}>
                                        Қазақ
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClick('ru')}>
                                        Русский
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}
