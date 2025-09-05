import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle, IconButton, Typography,
} from '@mui/material'
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";
import {X} from "@phosphor-icons/react";


const SupportDialog = ({open, handleClose}) => {


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="lg"
        >
            <DialogTitle sx={{ backgroundColor: '#FAFAFA' }}>
                <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                    sx={{
                        fontWeight: 700,
                        fontSize: '28px',
                        color: '#4A4A4A',
                        textAlign: 'center',
                        m: "44px auto 28px"
                    }}
                >Leave a message to your manager</Typography>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <X size={24} color="#525252"/>
                </IconButton>
            </DialogTitle>

            <DialogContent sx={{ backgroundColor: '#FAFAFA', p: "0 60px" }}>

                <TextField
                    color="secondary"
                    multiline
                    fullWidth
                    placeholder="Write your message here"
                    sx={{
                        mb: '36px',
                        '& .css-veftxx-MuiInputBase-root-MuiOutlinedInput-root': {
                            minHeight: '250px',
                            alignItems: 'start', // Align text to the start (left)
                            backgroundColor: '#fff',
                            minWidth: '450px'
                        },
                    }}

                    size="medium"
                />
                <StyledButton color="secondary" variant="contained" fullWidth size="large">Leave a
                    message</StyledButton>

                <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                    sx={{
                        fontWeight: 400,
                        fontSize: '16px',
                        color: '#525252',
                        textAlign: 'center',
                        m: "20px 0px"
                    }}
                >Your manager will reply to your message as soon as possible</Typography>

            </DialogContent>
        </Dialog>
    )
}

export default SupportDialog

const StyledButton = styled(Button)`
  background-color: #292D34;
  color: #FFF;
  
`