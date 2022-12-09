import * as React from 'react';
import Calendario from './Calendario';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import { useState } from 'react';


export default function FormPropsTextFields() {

  

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [primaria, setPrimaria] = useState("");
  const [secundaria, setSecundaria] = useState("");
  const [terciario, setTerciario] = useState("");
  const [universitario, setUniversitario] = useState("");
  const [fechaNac, setFechaNac] = useState(dayjs('2022-08-18T21:11:54'));


  async function handleSubmit(event){
      event.preventDefault();
      const peticion = await fetch('http://localhost:4444/api/register', {method: "POST", headers: {'Content-Type': 'application/json'} , body: JSON.stringify ({
  
        nombre: name, 
        apellido: surname, 
        email: email, 
        password: password, 
        primaria: primaria, 
        secundaria: secundaria, 
        terciario: terciario,
        universitario: universitario,
        rol: 'alumno' 
      })})
      console.log(peticion);


  }; 




  return (
  
  
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-5">
              <label
                for="name"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Name:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-user text-blue-500"></i>
                </div>


                <input
                  id="name"
                  type="name"
                  name="name"
                  value={name}
                  onChange={ function (event){
                    setName(event.target.value);
                  }}

                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your name"
                />
              </div>
            </div>


            <div className="flex flex-col mb-5">
              <label
                for="surname"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Surname:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-user text-blue-500"></i>
                </div>


                <input
                  id="surname"
                  type="surname"
                  name="surname"
                  value={surname}
                  onChange={ function (event){
                    setSurname(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your surname"
                />
              </div>
            </div>


            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={ function (event){
                    setEmail(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={ function (event){
                    setPassword(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>


            <div className="flex flex-col mb-5">
              <label
                for="primaria"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Primario:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="primaria"
                  type="primaria"
                  name="primaria"
                  value={primaria}
                  onChange={ function (event){
                    setPrimaria(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Indica si terminado o en curso"
                />
              </div>
            </div>


            <div className="flex flex-col mb-5">
              <label
                for="secundaria"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Secundario:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="secundaria"
                  type="secundaria"
                  name="secundaria"
                  value={secundaria}
                  onChange={ function (event){
                    setSecundaria(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Indica si terminado o en curso"
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <label
                for="terciario"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Terciario:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="terciario"
                  type="terciario"
                  name="terciario"
                  value={terciario}
                  onChange={ function (event){
                    setTerciario(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Indica si terminado o en curso"
                />
              </div>
            </div>


            <div className="flex flex-col mb-5">
              <label
                for="universitario"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Universitario:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input
                  id="universitario"
                  type="universitario"
                  name="universitario"
                  value={universitario}
                  onChange={ function (event){
                    setUniversitario(event.target.value);
                  }}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Indica si terminado o en curso"
                />
              </div>
            </div>


            <div className="flex flex-col mb-5">
              <label
                for="fechaNac"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Fecha de nacimiento:</label
              >
              <Calendario/>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-indigo-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>

            

          </form>

          <div className="flex w-full">
              <Link to="/" ><button
                type="submit"
                className="
                  flex
                  mt-2
                  items-right
                  justify-right
                  focus:outline-none
                  sm:text-base
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                  
                "
              >
                <span className="mr-2 uppercase text-blue-600 ">Cancel</span>
                <span>
                  
                </span>
              </button>
              </Link>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <a
          href="#"
          target="_blank"
          className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center
          "
        >
          <span className="ml-2"
            >You have an account?
            <a
              href="/login"
              className="text-xs ml-2 text-indigo-500 font-semibold"
              >Login here</a
            ></span
          >
        </a>
      </div>
    </div>
 
  );
}
