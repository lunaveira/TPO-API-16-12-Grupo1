import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filtros2() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
        <div >
        <InputLabel  id="demo-simple-select-label">Frecuencia</InputLabel>
        <Select className="w-96 flex-row gap-x-px"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Unica</MenuItem>
          <MenuItem value={20}>Semanal</MenuItem>
          <MenuItem value={30}>Mensual</MenuItem>
        </Select>
        </div>
        <div>
        <InputLabel  id="demo-simple-select-label">Tipo de clase</InputLabel>
        <Select className="w-96 "
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Individual</MenuItem>
          <MenuItem value={20}>Grupal</MenuItem>
         
        </Select>
        </div>
        <div>
        <InputLabel  id="demo-simple-select-label">Materia</InputLabel>
        <Select className="w-96 "
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Informatica</MenuItem>
          <MenuItem value={20}>Ingles</MenuItem>
          <MenuItem value={30}>Matematica</MenuItem>
          <MenuItem value={30}>Historia</MenuItem>
          <MenuItem value={30}>Literatura</MenuItem>
          <MenuItem value={30}>Geografia</MenuItem>
        </Select>
        </div>

        <div>
        
        <Select className="w-96 "
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <InputLabel  id="demo-simple-select-label">Calificacion</InputLabel>
          <MenuItem value={10}>1 estrella</MenuItem>
          <MenuItem value={20}>2 estrellas</MenuItem>
          <MenuItem value={30}>3 estrellas</MenuItem>
          <MenuItem value={30}>4 estrellas</MenuItem>
          <MenuItem value={30}>5 estrellas</MenuItem>
          
        </Select>
        </div>
      </FormControl>

      </Box>

      

      
    
  );
}