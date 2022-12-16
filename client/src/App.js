
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
import ListaMisClases from "./components/ListaMisClases";

import MiPerfilAlumno from "./components/MiPerfilAlumno";
import FormOlvidePassword from "./components/FormOlvidePassword";
import FormCrearClase from "./components/FormCrearClase";
import MiPerfilProfesor from "./components/MiPerfilProfesor";
import FormHacerComentario from "./components/FormHacerComentario";



function App() {
    const [isOpen, setIsOpen]= useState(false);

    const [isOpenRol, setIsOpenRol]= useState(false);

    const[rol, setRol] = useState('');

    const [user, setUser] = useState({});

    const [clases, setClases] = useState([]);


    
    async function peticion(){
      const pet = await fetch('http://localhost:4444/api/clases')
      const peticionDecode = await pet.json();
      setClases(peticionDecode.clases);

  }

  useEffect(function(){
      peticion();
  }, [])


    async function verificarToken(token) {
      const peticion = await fetch('http://localhost:4444/api/validate-token', {headers: {token: token} } )

      
      if(peticion.ok){
        const tokenDecode = jwtDecode(token);

        const peticion2 = await fetch('http://localhost:4444/api/usuarios/' + tokenDecode.user.id)
        const peticionDecode = await peticion2.json();

       
       
         setRol(peticionDecode.userByID.rol);
         setUser(peticionDecode)
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
        <Route path="/" element={<Home rol={rol} clases={clases}/>} />
        <Route path="/login" element={<Login setRol={setRol} setUser={setUser} />} />
        <Route path="/register-profesor" element={<RegisterP setRol={setRol}/>} />
        <Route path="/register-alumno" element={<RegisterA setRol={setRol}/>} />
        <Route path="/elegir-rol" element={<ElegirRol/>} />
        <Route path="/contratar-clases" element={<FormPropsTextFields/>} />
        
  
        <Route path="/dashboard-profesor" element={<DashboardProfesor rol ={rol} clases={clases} user={user}/>} />
        <Route path="/dashboard-alumno" element={<DashboardAlumno/>} />

        <Route path="/mis-clases" element={<ListaMisClases user={user} clases={clases} />} />
        <Route path="/mi-perfil-alumno" element={<MiPerfilAlumno/>} />
        <Route path="/mi-perfil-profesor" element={<MiPerfilProfesor/>} />
        <Route path="/recuperar-password" element={<FormOlvidePassword/>} />
        <Route path="/crear-clases" element={<FormCrearClase user={user} />} />
        <Route path="/hacer-comentarios" element={<FormHacerComentario/>} />

        
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
