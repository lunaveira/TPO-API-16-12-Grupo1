

import RecipeReviewCard from "../components/CardsMaterias";
import Bienvenida from "../components/CardBienvenida";
import Filtros2 from "../components/Filtros2";
import Filtros from "../components/Filtros";




export function Home() {




    

    const clases = [
        {
            materia: "Matematica",
            nombreClase: 'Funciones binomiales',
            profesor: "Gabriela Guido",
            descripcion: "lorem ipsum",
            duracion: '120 minutos',
            frecuencia: 'semanal',
            calificacion: '5',
            avatar: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
            imagenClase: 'https://www.eltiempo.com/files/image_640_428/uploads/2021/12/06/61ae7abe0ad7b.jpeg',
            comentarios:[{
                nombre: 'Juana Gomez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Logre comprender todos los conceptos'

            },
            {
                nombre: 'Paula Farias',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Hizo que me gusten las matematicas!'

            }],
            tipoClase: 'grupal',
            costo: '$600'

        },
        {
            materia: "Ingles",
            nombreClase: 'Tiempos verbales en ingles',
            profesor: "Ricardo Wehbe",
            descripcion: "hola",
            duracion: '160 minutos',
            frecuencia: 'unica',
            calificacion: '4',
            avatar:'https://estudiantes.ucontinental.edu.pe/wp-content/uploads/2020/09/Madurez-emocional-7.jpg',
            imagenClase: 'https://www.magisnet.com/wp-content/uploads/2020/11/ingle%CC%81s.jpg',
            comentarios:[{
                nombre: 'Ana Lopez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Me gusto mucho esta clase'

            },
            {
                nombre: 'Pedro Suarez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Muy buen profesor'

            }],
            tipoClase: 'individual',
            costo: '$700'
        },
        {
            materia: "Informatica",
            nombreClase: 'Introduccion a Python',
            profesor: "Paula Sarasa",
            descripcion: "chau",
            duracion: '90 minutos',
            frecuencia: 'mensual',
            calificacion: '3.4',
            avatar:'https://st3.depositphotos.com/1037473/18812/i/450/depositphotos_188121446-stock-photo-in-the-library-pretty-female.jpg',
            imagenClase: 'https://prod-discovery.edx-cdn.org/media/programs/card_images/a11c408f-0986-4393-8268-8bc16500cdf3-db87df485d12.jpg',
            comentarios:[{
                nombre: 'Matias Martinez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Pude entender todos los temas que necesitaba'

            },
            {
                nombre: 'Lola Fernandez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Las explicaciones son muy claras!'

            }],
            tipoClase: 'grupal',
            costo: '$800'
        },
        {
            materia: "Informatica",
            nombreClase: 'Introduccion a Java',
            profesor: "Tomas Malio",
            descripcion: "esta es la descripcion",
            duracion: '160 minutos',
            frecuencia: 'semanal',
            calificacion: '4.4',
            avatar:'https://st3.depositphotos.com/1037473/18812/i/450/depositphotos_188121446-stock-photo-in-the-library-pretty-female.jpg',
            imagenClase: 'https://prod-discovery.edx-cdn.org/media/programs/card_images/a11c408f-0986-4393-8268-8bc16500cdf3-db87df485d12.jpg',
            comentarios:[{
                nombre: 'Pablo Perez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Me gusto mucho aprender cosas nuevas'

            },
            {
                nombre: 'Juan Gonzalez',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'Clases super entretenidas!'

            }],
            tipoClase: 'individual',
            costo: '$860'
        },
        {
            materia: "Informatica",
            nombreClase: 'Introduccion a Java',
            profesor: "Tomas Malio",
            descripcion: "esta es la descripcion",
            duracion: '160 minutos',
            frecuencia: 'semanal',
            calificacion: '4.4',
            avatar:'https://st3.depositphotos.com/1037473/18812/i/450/depositphotos_188121446-stock-photo-in-the-library-pretty-female.jpg',
            imagenClase: 'https://prod-discovery.edx-cdn.org/media/programs/card_images/a11c408f-0986-4393-8268-8bc16500cdf3-db87df485d12.jpg',
            comentarios:[{
                nombre: 'pedro',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'loren ipsum'

            },
            {
                nombre: 'juan',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'loren ipsum'

            }],
            tipoClase: 'individual',
            costo: '$860'
        },
        {
            materia: "Informatica",
            nombreClase: 'Introduccion a Java',
            profesor: "Tomas Malio",
            descripcion: "esta es la descripcion",
            duracion: '160 minutos',
            frecuencia: 'semanal',
            calificacion: '4.4',
            avatar:'https://st3.depositphotos.com/1037473/18812/i/450/depositphotos_188121446-stock-photo-in-the-library-pretty-female.jpg',
            imagenClase: 'https://prod-discovery.edx-cdn.org/media/programs/card_images/a11c408f-0986-4393-8268-8bc16500cdf3-db87df485d12.jpg',
            comentarios:[{
                nombre: 'pedro',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'loren ipsum'

            },
            {
                nombre: 'juan',
                imagen: 'https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg?w=2000',
                fecha: '02-12-2022',
                comentario: 'loren ipsum'

            }],
            tipoClase: 'individual',
            costo: '$860'
        }
    ];

    
    return (
        <>


         <Bienvenida></Bienvenida>

        <Filtros/>

       
    
        <div className=" flex gap-4  flex-wrap justify-center p-5 absolute" >
        {clases.map(function (clase){
            return(
                <RecipeReviewCard 
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