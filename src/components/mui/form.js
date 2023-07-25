import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function BasicTextFields() {
    return (
        <Box sx={{ width: ['32rem','32rem','32rem'],display:'flex',flexDirection:'column',gap:'1rem'}}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField sx={{
                    width: ['23rem','15rem','15rem'],
                    "& .MuiInputLabel-root": { color: 'white' },//styles the label
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    },
                }} id="outlined-basic" label="Name" variant="outlined" />
                <TextField sx={{
                    width: ['23rem','15rem','15rem'], "& .MuiInputLabel-root": { color: 'white' },//styles the label
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    },
                }} id="filled-basic" label="E-mail" variant="outlined" />
                <TextField sx={{
                    width: ['23rem','31rem','31rem'], "& .MuiInputBase-root": {
                        height: '10rem'
                    }, "& .MuiInputLabel-root": { color: 'white' },//styles the label
                    "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    },
                }} id="standard-basic" label="Message" variant="outlined" />
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button sx={{ width: ['25%','97%'], backgroundColor: '#5389E0', color: 'white' }}>Send</Button>
            </Box>
        </Box>
    );
}