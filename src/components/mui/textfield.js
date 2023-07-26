import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField sx={{'& .MuiOutlinedInput-notchedOutline':{borderRadius:"5rem",borderColor:'white'},'& .MuiInput-root':{color:'white'}}} id="outlined-basic" label="Outlined" variant="outlined" />
     
    </Box>
  );
}