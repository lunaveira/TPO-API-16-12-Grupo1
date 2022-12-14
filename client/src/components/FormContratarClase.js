import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function FormPropsTextFields(props) {
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [horario, setHorario] = useState("");
    const [mensaje, setMensaje] = useState("");
      
    
    async function handleSubmit(e) {
      e.preventDefault();

      const payload =  {
        email,
        telefono,
        horario,
        mensaje
      }

      await fetch('http://localhost:4444/api/contratar-clase', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      alert("Mensaje enviado al profesor")
    }

    return (

        <div
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100 "
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
            Contrata esta clase
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Ingresa los datos para enviar una solicitud y el profesor te respondera a la brevedad.
          </div>
  
          <div className="mt-10">
            <form onClick={handleSubmit}>
             
  
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    name="email"
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
                    placeholder="Ingresa un email para que te contacten"
                  />
                </div>
              </div>


              <div className="flex flex-col mb-6">
                <label
                  for="telefono"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Telefono:</label
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
                    id="telefono"
                    type="telefono"
                    name="telefono"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
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
                    placeholder="Ingresa tu telefono de contacto"
                  />
                </div>
              </div>


              <div className="flex flex-col mb-6">
                <label
                  for="horario"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Horario:</label
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
                    id="horario"
                    type="horario"
                    name="horario"
                    value={horario}
                    onChange={e => setHorario(e.target.value)}
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
                    placeholder="Horario de referencia para ser contactado"
                  />
                </div>
              </div>


              <div className="flex flex-col mb-6">
                <label
                  for="mensaje"
                  className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >Mensaje:</label
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
                    id="mensaje"
                    type="mensaje"
                    name="mensaje"
                    value={mensaje}
                    onChange={e => setMensaje(e.target.value)}
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
                    placeholder="Algun mensaje que quieras dejarle al profesor"
                  />
                </div>
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
                  <span className="mr-2 uppercase">Enviar</span>
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
       
      </div>
    );
}