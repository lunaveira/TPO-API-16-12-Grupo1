import BotonAgregarClases from "../components/BotonCrearClases"
import {Link} from 'react-router-dom';
import RecipeReviewCard from "../components/CardsMaterias";


export function DashboardProfesor(props) {

    return (
        <div>   

        <div className="p-5">

        <Link to="/crear-clases"><BotonAgregarClases/> </Link>

        </div>
        

        <div className=" flex gap-4  flex-wrap justify-center p-5 absolute" >

        {props.clases?.filter(function(clase) {
            return clase?.profesor?.id === props.user?.profeOAlumno?.id;
        
        }).map(function (clase){
            return(
                <RecipeReviewCard rol={props.rol} 
                descripcion = {clase.descripcion} materia={clase.materia} 
                profesor={clase.profesor} usuario={clase.user} tipoclase={clase.tipoclase} 
                frecuencia={clase.frecuencia} calificaciones={clase.calificaciones}
                comentarios={clase.comentarios} duracion={clase.duracion}
                nombreClase={clase.nombre} imagen={clase.imagen}
                avatar={clase.avatar} costo={clase.costo} promedioCalificacion={clase.promedioCalificacion} id = {clase.id}  ></RecipeReviewCard>
            )
        })}

        </div>
        

       

        </div>

    )

}