import BotonAgregarClases from "../components/BotonCrearClases"
import FormCrearClase from "../components/FormCrearClase"
import SubirImagenClase from "../components/SubirImagenClase"
import {Link} from 'react-router-dom';


export function DashboardProfesor() {

    return (
        <div>
    
       

        <Link to="/crear-clases"><BotonAgregarClases/> </Link>

    

        

       

        </div>

    )

}