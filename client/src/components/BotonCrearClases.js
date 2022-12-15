export default function BotonAgregarClases() {
    return(
        <div className="flex w-full">
        <button
          
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
           
          "
        >
          <span className="mr-2 uppercase">Crear clase</span>
          
        </button>
      </div>
    );
}