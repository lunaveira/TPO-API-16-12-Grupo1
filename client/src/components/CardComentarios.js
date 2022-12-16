import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {  blueGrey } from '@mui/material/colors';
import BasicRating from './Calificar';


  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>


export default function CardComentarios(props) {
  return (
    <Card className='gap-x-px' sx={{ minWidth: 275 }}>
      <CardContent>
        {
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            <img className="w-full h-full object-cover" src = {props.imagen} alt="avatar" />
          </Avatar>

         
        }


        
        <Typography variant="h5" component="div">
          {props.nombre}
          <BasicRating readOnly value={props.calificacion && props.calificacion.calificacion}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.fecha}
        </Typography>
        <Typography variant="body2">
          {props.comentario}
         
        </Typography>
      </CardContent>
    
    </Card>
  );
}