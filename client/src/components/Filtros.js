import * as React from 'react';

import { useState } from "react";

import { Select, MenuItem, Grid, InputLabel, FormControl, TextField } from "@mui/material";

 

export default function Filtros(props) {


    const handleChange = (e) => {
      props.setSearchValue(e.target.value)
    }

  return (
    <div className="flex">
      
          <FormControl sx={{ m: 1, width: '50%' }} size="small">
          <InputLabel id="materias-label">Materias</InputLabel>
            <Select
              labelId="materias-select-small"
              id="materias-select-small"
              value={props.searchValue}
              label="Materia"
              onChange={handleChange}
            >
              <MenuItem style={{display: 'grid'}} value={""}>Niguno</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"matematica"}>Matemática</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"informatica"}>Informática</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"historia"}>Historia</MenuItem> 
            </Select>
          </FormControl>
   

      <FormControl sx={{ m: 1, width: '50%' }} size="small">
          
      <InputLabel id="tipo-de-clase-label">Tipo de Clase</InputLabel>
      <Select
        labelId="tipo-de-clase-select-small"
        id="tipo-de-clase-select-small"
        value={props.searchValueTipo}
        label="Tipo de Clase"
        onChange={e => props.setSearchValueTipo(e.target.value)}
      >
        <MenuItem style={{display: 'grid'}} value={""}>Todos</MenuItem>
        <MenuItem style={{display: 'grid'}} value={"individual"}>Individual</MenuItem>
        <MenuItem style={{display: 'grid'}} value={"grupal"}>Grupal</MenuItem>
      </Select>
    </FormControl>
    
   
          <FormControl className="flex justify-center"sx={{ m: 1, width: '50%' }} size="small">
          <InputLabel id="frecuencia-label">Frecuencia</InputLabel>
            <Select
              labelId="frecuencia-select-small"
              id="frecuencia-select-small"
              value={props.searchValueFrec}
              label="Frecuencia"
              onChange={e => props.setSearchValueFrec(e.target.value)}
            >
              <MenuItem style={{display: 'grid'}} value={""}>Todos</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"semanal"}>Semanal</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"unica"}>Unica</MenuItem>
              <MenuItem style={{display: 'grid'}} value={"mensual"}>Mensual</MenuItem>
            </Select>
          </FormControl>

   
          <FormControl sx={{ m: 1, width: '50%' }} size="small">
            <TextField
              label="Calificacion mayor a"
              id="calificacion-size-small"
              size="small"
              value={props.calorieValue}
              onChange={e => props.setCalorieValue(e.target.value)}
            />
          </FormControl>

      
    </div>

  );
}