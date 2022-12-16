import SubirImagenClase from "./SubirImagenClase";
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';

// function setPreviewImage(file) {
//     const fileReader = new FileReader();
// 	let payload = "";

// 	console.log('file', file)

//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//         // You have to do all in this function, you cannot return anything, :(

//         // fileReader.result returns a codebase64 that you can use
// 		payload = fileReader.result;
//     }

// 	return payload;
// }

export default function FormCrearClase(props) {
	const [name, setName] = useState("");
	const [materia, setMateria] = useState("");
	const [frecuencia, setFrecuencia] = useState("");
	const [duracion, setDuracion] = useState("");
	const [tipo, setTipo] = useState("");
	const [costo, setCosto] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [image, setImage] = useState("");
	const [base64, setBase64] = useState("");
	  
	const handleChangeFile = (file) => {
		let fileData = new FileReader();
		fileData.readAsDataURL(file);
		fileData.onload = () => {
			setBase64(fileData.result);
		};
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const payload =  {
			name,
			materia,
			frecuencia,
			duracion,
			tipo,
			costo,
			descripcion,
			image: base64,
			profesorId: props.user.profeOAlumno.id
		}


		await fetch('http://localhost:4444/api/crear-clase', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		alert("Clase creada")
	}

    return(
		<div class="flex items-center justify-center p-12">
		 
		  <div class="mx-auto w-full max-w-[550px]">
			<form onSubmit={handleSubmit}>
			  <div class="mb-5">
				<label
				  for="name"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				  Nombre 
				</label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
				  	type="text"
				  	name="name"
				  	id="name"
				  	placeholder="Nombre de la clase"
				  	class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			  </div>
			  <div class="mb-5">
				<label
				  for="materia"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				  Materia
				</label>
				<input
					value={materia}
					onChange={(e) => setMateria(e.target.value)}
				  	type="text"
				  	name="materia"
				 	id="materia"
				  	placeholder="Ejemplo: historia, literatura, etc."
				  	class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			  </div>
			  <div class="mb-5">
				<label
				  for="tipo"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				  Tipo de clase
				</label>
				<input
				value={tipo}
				onChange={(e) => setTipo(e.target.value)}
				  type="text"
				  name="tipo"
				  id="tipo"
				  placeholder="Individual / grupal"
				  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			  </div>
			  <div class="mb-5">
				<label
				  for="frecuencia"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				  Frecuencia
				</label>
				<input
					value={frecuencia}
					onChange={e => setFrecuencia(e.target.value)}
				  type="text"
				  name="frecuencia"
				  id="frecuencia"
				  placeholder="Semanal / mensual / unica"
				  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			  </div>
			  <div class="mb-5">
				<label
				  for="costo"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				  Costo de la clase
				</label>
				<input
				value={costo}
				onChange={(e) => setCosto(e.target.value)}
				  type="text"
				  name="costo"
				  id="costo"
				  placeholder="Costo por hora"
				  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			  </div>
			  <div class="mb-5">
				<label
				  for="duracion"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				 Duracion
				</label>
				<input
				value={duracion}
				onChange={(e) => setDuracion(e.target.value)}
				  type="text"
				  name="duracion"
				  id="duracion"
				  placeholder="Duracion de la clase en minutos"
				  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				/>
			  </div>
			  <div class="mb-5">
				<label
				  for="descripcion"
				  class="mb-3 block text-base font-medium text-[#07074D]"
				>
				  Descripcion
				</label>
				<textarea
				value={descripcion}
				onChange={e => setDescripcion(e.target.value)}
				  rows="4"
				  name="descripcion"
				  id="descripcion"
				  placeholder="Breve descripcion de como va a ser la clase."
				  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
				></textarea>
			  </div>

			  <SubirImagenClase handleChangeFile={handleChangeFile} />

			  <div>
				<button
					type="submit"
					class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
				>
				  Submit
				</button>

				
			  </div>
			 
			</form>

			<Link to="/dashboard-profesor"><button  className="text-indigo-600  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cancel</button></Link>
		  </div>
		</div>
    );
}



