

import RecipeReviewCard from "../components/CardsMaterias";
import Bienvenida from "../components/CardBienvenida";
import Filtros2 from "../components/Filtros2";
import Filtros from "../components/Filtros";
import { useEffect, useState } from "react";




export function Home(props) {

    const[clases, setClases] = useState([]);

    async function peticion(){
        const pet = await fetch('http://localhost:4444/api/clases')
        const peticionDecode = await pet.json();
        setClases(peticionDecode.clases);

    }

    useEffect(function(){

        peticion();

        

    }, [])

    


    
    return (
        <>


         <Bienvenida></Bienvenida>

        <Filtros/>

       
    
        <div className=" flex gap-4  flex-wrap justify-center p-5 absolute" >
        { clases != "" && clases.map(function (clase){
            return(
                <RecipeReviewCard rol={props.rol}
                descripcion = {clase.descripcion} materia={clase.materia} 
                profesor={clase.profesor} tipoClase={clase.tipoClase} 
                frecuencia={clase.frecuencia} calificacion={clase.calificacion}
                comentarios={clase.comentarios} duracion={clase.duracion}
                nombreClase={clase.nombreClase} imagenClase={clase.imagenClase}
                avatar={clase.avatar} costo={clase.costo}  ></RecipeReviewCard>
            )
        })}

        </div> 


    

        </>



       

    )

}