
import ButtonAppBar from "../src/components/Navegador";

import { Home } from "./pages/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import { DashboardAlumno } from "./pages/DashboardAlumno";

import { DashboardProfesor } from "./pages/DashboardProfesor";

import { useState, useEffect } from "react";

import Login from "../src/components/Login";

import RegisterP from "../src/components/RegisterProfesor";

import RegisterA from "../src/components/RegisterAlumno";

import ElegirRol from "../src/components/ElegirRol";

import FormPropsTextFields from "../src/components/FormContratarClase";

import jwtDecode from "jwt-decode";



function App() {

    const [isOpen, setIsOpen]= useState(false);


    const [isOpenRol, setIsOpenRol]= useState(false);



    const[rol, setRol] = useState('');

    async function verificarToken(token) {
      const peticion = await fetch('http://localhost:4444/api/validate-token', {headers: {token: token} } )

      
      if(peticion.ok){
        const tokenDecode = jwtDecode(token);

        const peticion2 = await fetch('http://localhost:4444/api/usuarios/' + tokenDecode.user.id)
        const peticionDecode = await peticion2.json();

       
       
         setRol(peticionDecode.userByID.rol);
         

      }

    

    }

    useEffect(function (){
      const token = localStorage.getItem('token.tusClases');
      verificarToken(token);
      
      

    }, [])



    

    function openLoginForm(){
      setIsOpen(!isOpen)
      
  
    }


    function openRoles(){
        setIsOpenRol(!isOpenRol)
    }

    

  return (
    <BrowserRouter>
       <ButtonAppBar openLoginForm={openLoginForm} openRoles={openRoles} rol={rol} setRol={setRol}/>
      <Routes>
        <Route path="/" element={<Home rol={rol}/>} />
        <Route path="/login" element={<Login setRol={setRol}/>} />
        <Route path="/register-profesor" element={<RegisterP setRol={setRol}/>} />
        <Route path="/register-alumno" element={<RegisterA setRol={setRol}/>} />
        <Route path="/elegir-rol" element={<ElegirRol/>} />
        <Route path="/contratar-clases" element={<FormPropsTextFields/>} />
        
  
        <Route path="/dashboard-profesor" element={<DashboardProfesor/>} />
        <Route path="/dashboard-alumno" element={<DashboardAlumno/>} />

        
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
