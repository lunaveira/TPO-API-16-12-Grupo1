import {Link} from 'react-router-dom';

export default function ElegirRol(props) {
    return(
      <div className="bg-slate-600 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
        <div className="bg-white px-16 py-14 rounded-md text-center">
          <h1 className="text-xl mb-4 font-bold text-slate-500">Con que rol queres registrarte?</h1>
          <Link to="/register-profesor"><button className="bg-indigo-500 px-4 py-2 rounded-md text-md text-white font-semibold">Profesor</button></Link>
          <Link to="/register-alumno"><button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Alumno</button></Link>
        </div>
      </div>
      


    );
}