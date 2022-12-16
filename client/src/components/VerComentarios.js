export default function VerComentarios(){
    return(
        <div>
        <table className="min-w-full table-auto">
          <thead className="justify-between">
            <tr className="bg-gray-800">
              <th className="px-16 py-2">
                <span className="text-gray-300"></span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Usuario</span>
              </th>
              <th className="px-16 py-2">
                <span className="text-gray-300">Clase</span>
              </th>
           
              
            </tr>
          </thead>
          <tbody className="bg-gray-200">
          
            <tr className="bg-white border-4 border-gray-200">
              <td className="px-16 py-2 flex flex-row items-center">
              <img
                    className="h-8 w-8 rounded-full object-cover "
                    src="https://randomuser.me/api/portraits/men/38.jpg"
                    alt=""
                  />
              </td>
              <td>
                <span className="text-center ml-2 font-semibold">Brett Castillo</span>
              </td>
              <td className="px-16 py-2">
                

                <span>Clases de React</span>
              </td>
            
              <td className="px-16 py-2">
               <button  className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                 Publicar
                </button>
              </td>
  
              <td className="px-16 py-2">

              <button  className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                  Bloquear
                </button>
                
              </td>
            </tr>
          </tbody>
        </table>

        
      </div>

    );
}