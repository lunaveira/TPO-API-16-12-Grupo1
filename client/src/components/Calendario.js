import * as React from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function Calendario(props) {
  

  const handleChange = (newValue) => {
    props.setFechaNac(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          
          inputFormat="MM/DD/YYYY"
          value={props.fechaNac}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          
        />
        
      </Stack>
    </LocalizationProvider>
  );
}
