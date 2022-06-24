import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div class="flex flex-col
        items-center justify-center">
            <div class="w-200 h-200 md:w-200 mx-auto py-6 text-center">
             <img width="200" height="200" alt="not-found" src="../images/undraw_page_not_found_su7k.png" />
             <p class="leading-normal text-2xl mb-8">
                        Desolé, nous n'avons pas trouvé la page demandée

             </p>
             <Link to="/" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Retour à la page d'accueil
            </Link>
            </div>
        </div>
     );
}
 
export default NotFound;