

import RecipeReviewCard from "../components/CardsMaterias";
import Bienvenida from "../components/CardBienvenida";
import Filtros from "../components/Filtros";
import { useEffect, useState } from "react";



export function Home(props) {
   
    const [filteredClases, setFilteredClases] = useState([]);
    const [searchValue, setSearchValue] = useState("")
    const [searchValueTipo, setSearchValueTipo] = useState("")
    const [searchValueFrec, setSearchValueFrec] = useState("")
    const [calorieValue, setCalorieValue] = useState(0)

    useEffect(function() {
        setFilteredClases([...props.clases].filter(function(clase) {
            return searchValue && new RegExp(searchValue, "i").test(clase.materia) 
            || searchValueTipo && new RegExp(searchValueTipo, "i").test(clase.tipoclase) ||
            searchValueFrec && new RegExp(searchValueFrec, "i").test(clase.frecuencia) ||
            calorieValue && calorieValue < clase.promedioCalificacion
        }));
    }, [searchValue, searchValueTipo, searchValueFrec, calorieValue])
    
    return (
        <>
        <Bienvenida></Bienvenida>

        <Filtros 
            searchValue={searchValue}  
            setSearchValue={setSearchValue}
            
            setSearchValueTipo={setSearchValueTipo}
            searchValueTipo={searchValueTipo}
            
            searchValueFrec={searchValueFrec}
            setSearchValueFrec={setSearchValueFrec}
            
            calorieValue={calorieValue}
            setCalorieValue={setCalorieValue}
        />
    
        <div className=" flex gap-4  flex-wrap justify-center p-5 absolute" >
        {(filteredClases != "" && (searchValue || searchValueTipo || searchValueFrec || calorieValue)) && filteredClases.map(function (clase){
            return(
                <RecipeReviewCard rol={props.rol}
                descripcion = {clase.descripcion} materia={clase.materia} 
                profesor={clase.profesor} usuario={clase.user} tipoclase={clase.tipoclase} 
                frecuencia={clase.frecuencia} calificaciones={clase.calificaciones}
                comentarios={clase.comentarios} duracion={clase.duracion}
                nombreClase={clase.nombre} imagen={clase.imagen}
                avatar={clase.avatar} costo={clase.costo} promedioCalificacion={clase.promedioCalificacion} ></RecipeReviewCard>
            )
        })}
        {(props.clases != "" && !searchValue && !searchValueTipo && !searchValueFrec && !calorieValue) && props.clases.map(function (clase){
            return(
                <RecipeReviewCard rol={props.rol}
                descripcion = {clase.descripcion} materia={clase.materia} 
                profesor={clase.profesor} usuario={clase.user} tipoclase={clase.tipoclase} 
                frecuencia={clase.frecuencia} calificaciones={clase.calificaciones}
                comentarios={clase.comentarios} duracion={clase.duracion}
                nombreClase={clase.nombre} imagen={clase.imagen}
                avatar={clase.avatar} costo={clase.costo} promedioCalificacion={clase.promedioCalificacion}  ></RecipeReviewCard>
            )
        })}

        </div> 


    

        </>



       

    )

}