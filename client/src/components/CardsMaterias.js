import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  blueGrey } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {Link} from 'react-router-dom';
import CardComentarios from './CardComentarios';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
    
        avatar={
          <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
            <img className="w-full h-full object-cover" src = {props.avatar} alt="avatar" />
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.nombreClase}
        subheader={props.materia}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.imagenClase}
        alt="clases particulares"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Frecuencia: {props.frecuencia}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duracion: {props.duracion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calificaciones: {props.calificacion}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Costo: {props.costo}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Link to="/contratar-clases"><AddShoppingCartIcon /></Link>
        </IconButton>
       
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comentarios</Typography>
      
          {props.comentarios.map(function (comentario){
            return (

              <CardComentarios nombre={comentario.nombre} imagen={comentario.imagen}
              fecha={comentario.fecha} comentario={comentario.comentario}

              />

             

            
            )
        
          }
          )
        }
        
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
