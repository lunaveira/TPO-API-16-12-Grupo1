import * as React from 'react';

import {Link} from 'react-router-dom';


export default function ButtonAppBar(props) {

  function logOut() {

    localStorage.removeItem('token.tusClases');
    props.setRol("");
    


  }

  return (
  
    <div className="my- mr-2 ml-2 mt-2 flex items-center justify-between py-3 bg-indigo-400 rounded-lg">

      <div className="ml-2 flex space-x-5">
        <div className=" mr-1.5 mb-1 text-3xl text-white font-serif duration-300 hover:scale-105 hover:border-b-4 border-indigo-200 ">TusClases</div>
      </div>


      <div>
        {props.rol == '' &&
        <div>
          <Link to="/login"><button className="mx-1 bg-indigo-400 p-2 font-bold text-white"  >Login</button></Link>
        
          <Link to="/elegir-rol"><button className="mx-1 bg-indigo-400 p-2 font-bold text-white" >Register</button></Link>
          </div>  }

          {props.rol == 'alumno' &&
          <div>
             <Link to="/"><button onClick={logOut} className="mx-1 bg-indigo-400 p-2 font-bold text-white"  >Log out</button></Link>
          </div>
          }

          {props.rol == 'profesor' &&

          <div>
            <Link to="/"><button onClick={logOut} className="mx-1 bg-indigo-400 p-2 font-bold text-white"  >Log out</button></Link>
          </div>

          }
      </div>
     
    </div>








  );
}