import * as React from 'react';

import { useState } from "react";

import { Select, MenuItem, Grid, InputLabel, FormControl, TextField } from "@mui/material";

 

export default function Filtros() {
    const [searchValue, setSearchValue] = useState("")
    const [searchValueTipo, setSearchValueTipo] = useState("")
    const [searchValueFrec, setSearchValueFrec] = useState("")
    const [calorieValue, setCalorieValue] = useState(0)
    const handleChange = (e) => {
      setSearchValue(e.target.value)
    }
  return (

    <Grid >
    
    <Grid className='justify-center w-full' container spacing={2} style={{marginBottom: '2.5%'}}>
      <Grid  item xs={5} >
          <FormControl sx={{ m: 1, width: '50%' }} size="small">
          <InputLabel id="materias-label">Materias</InputLabel>
            <Select
              labelId="materias-select-small"
              id="materias-select-small"
              value={searchValue}
              label="Materia"
              onChange={handleChange}
            >
              <MenuItem style={{display: 'grid'}} value={""}>Niguno</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"Matemática"}>Matemática</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"Informática"}>Informática</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"Historia"}>Historia</MenuItem>
            </Select>
          </FormControl>
      </Grid>
      <Grid item xs={4} >
          <FormControl sx={{ m: 1, width: '50%' }} size="small">
          <InputLabel id="tipo-de-clase-label">Tipo de Clase</InputLabel>
            <Select
              labelId="tipo-de-clase-select-small"
              id="tipo-de-clase-select-small"
              value={searchValueTipo}
              label="Tipo de Clase"
              onChange={e => setSearchValueTipo(e.target.value)}
            >
              <MenuItem style={{display: 'grid'}} value={""}>Todos</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"Individual"}>Individual</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"Grupal"}>Grupal</MenuItem>
            </Select>
          </FormControl>
      </Grid>
      <Grid item xs={4} >
          <FormControl className="flex justify-center"sx={{ m: 1, width: '50%' }} size="small">
          <InputLabel id="frecuencia-label">Frecuencia</InputLabel>
            <Select
              labelId="frecuencia-select-small"
              id="frecuencia-select-small"
              value={searchValueFrec}
              label="Frecuencia"
              onChange={e => setSearchValueFrec(e.target.value)}
            >
              <MenuItem style={{display: 'grid'}} value={""}>Todos</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"semanal"}>Semanal</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"unica"}>Unica</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"mensual"}>Mensual</MenuItem>
            </Select>
          </FormControl>
      </Grid>
      <Grid item xs={4}>
          <FormControl sx={{ m: 1, width: '50%' }} size="small">
            <TextField
              label="Calificacion mayor a"
              id="calificacion-size-small"
              size="small"
              value={calorieValue}
              onChange={e => setCalorieValue(e.target.value)}
            />
          </FormControl>
      </Grid>
      
    </Grid>
    </Grid>
  );
}