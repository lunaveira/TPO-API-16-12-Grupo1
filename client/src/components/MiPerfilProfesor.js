import Calendario from "./Calendario";

export default function MiPerfilProfesor({ handleChangeFile }) {
    return(

        <div className="flex justify-between container mx-auto">
        <div className="w-full">
        <div className="mt-4 px-4">
        <h1 className="font-thinner text-indigo-900 flex text-4xl pt-10 px-5">Modifica tu perfil</h1>
        
    
        <form className="mx-5 my-5">

        <div className="shrink-0 mt-5">
        <img className="h-20 w-20 object-cover rounded-full" src="https://sahilnetic.xyz/sahilnetic.png" alt="Current profile photo" />
        </div> 
        <label className="block pt-2">
            <span className="sr-only t-2">Choose profile photo</span>
            <input onChange={e => handleChangeFile(e.target.files[0])} type="file" className="w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-300 file:text-zinc-900
            hover:file:bg-indigo-600
            "/>
        </label>
       
        <label className="relative block p-3 border-2 mt-5 border-indigo-600 rounded" >
        <span className="text-md font-semibold text-indigo-800">
            Nombre
        </span>
        <input className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="nombre" type="text" placeholder="Tu nombre" />
        </label>
        
       
        <label className="relative block p-3 border-2 mt-5 border-indigo-600 rounded" >
        <span className="text-md font-semibold text-indigo-800">
            Apellido
        </span>
        <input className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none" id="apellido" type="text" placeholder="Tu apellido" />
        </label>
       
    
        <label className="relative block p-3 border-2 mt-5 border-indigo-600 rounded">
        <span className="text-md font-semibold text-indigo-800" >
            Email
        </span>
        <input className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none" id="email" type="email" placeholder="Tu email" />
        </label>
    

        <label className="relative block p-3 border-2 mt-5 border-indigo-600 rounded">
        <span className="text-md font-semibold text-indigo-800" >
            Titulo
        </span>
        <input className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none" id="titulo" type="text" placeholder="Tu titulo obtenido mas reciente (si tenes)" />
        </label>
    

        <label className="relative block p-3 border-2 mt-5 border-indigo-600 rounded">
        <span className="text-md font-semibold text-indigo-800" >
           Experiencia
        </span>
        <input className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none" id="experiencia" type="text" placeholder="Breve comentario sobre tu experiencia laboral" />
        </label>
    

    
        <button className="mt-5 border-2 px-5 py-2 rounded-lg border-indigo-600 border-b-4 font-black translate-y-2 border-l-4">
            Aceptar
        </button>
        </form>
        </div>
            </div>
    
    
        </div>
      
    

       
      
   

    );
}