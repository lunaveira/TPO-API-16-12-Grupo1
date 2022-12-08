
import ButtonAppBar from "../src/components/Navegador";

import { Home } from "./pages/Home";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import { DashboardAlumno } from "./pages/DashboardAlumno";

import { DashboardProfesor } from "./pages/DashboardProfesor";

import { useState } from "react";

import Login from "../src/components/Login";

import RegisterP from "../src/components/RegisterProfesor";

import RegisterA from "../src/components/RegisterAlumno";

import ElegirRol from "../src/components/ElegirRol";

import FormPropsTextFields from "../src/components/FormContratarClase";

function App() {

    const [isOpen, setIsOpen]= useState(false)


    const [isOpenRol, setIsOpenRol]= useState(false)

    

    function openLoginForm(){
      setIsOpen(!isOpen)
      
  
    }


    function openRoles(){
        setIsOpenRol(!isOpenRol)
    }

    

  return (
    <BrowserRouter>
       <ButtonAppBar openLoginForm={openLoginForm} openRoles={openRoles}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register-profesor" element={<RegisterP/>} />
        <Route path="/register-alumno" element={<RegisterA/>} />
        <Route path="/elegir-rol" element={<ElegirRol/>} />
        <Route path="/contratar-clases" element={<FormPropsTextFields/>} />
        
  
        <Route path="/dashboard-profesor" element={<DashboardProfesor/>} />
        <Route path="/dashboard-alumno" element={<DashboardAlumno/>} />

        
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
