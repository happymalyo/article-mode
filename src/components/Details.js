import useFetch from './useFetch';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const {data: service, isPending, error} = useFetch('http://localhost:5000/services/' +id);
    
    return(
        <div className="shadow-xl">
            
            {error && <div className="flex flex-col items-center justify-center">{error}</div>}
            {isPending && <div className="flex flex-col items-center justify-center">Loading...</div>}
            {service && 
            
                <div class="bg-gray-100 flex">
                <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                <div class="xl:max-w-lg xl:ml-auto">
                    {service.image && 
                        <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src={`../img/${service.image}`} alt="Woman workcationing on the beach"/>}
                    <span class="text-xl uppercase text-indigo-500">{'>'+service.categorie}</span>
                    <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                    {service.title}
                    </h1>
                    <span class="mt-1 text-1xl text-gray-600 leading-tight sm:mt-8 sm:text-4xl lg:text-1xl xl:text-4xl">
                    {service.adresse},{service.ville}
                    <br class="hidden lg:inline" />
                    </span>
                    <span class="text-xl text-indigo-400">{'#'+service.sous_categorie}</span>
                    <br class="hidden lg:inline" />
                    <span class="text-sm text-gray-500">{'contact: '+service.phone}</span>
                    <br class="hidden lg:inline" />
                    <span class="text-sm text-gray-500">{'email: '+service.email}</span>
                    <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                    {service.description} 
                    </p>
                    <Link class="text-sm text-indigo-500">{'https://wwww.'+service.site_web}</Link> 
                    <br class="hidden lg:inline" />
                    <div class="mt-4 sm:mt-6">  
                    <Link to="/services" class="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Retour</Link>
                    </div>
                </div>
                </div>
                <div class="hidden lg:block lg:w-1/2 lg:relative">
                {service.image && 
                <img class="absolute inset-0 h-full w-full object-cover object-center" src={`../img/${service.image}`}  alt="Woman workcationing on the beach "/>}
                </div>
            </div>
            }
        </div> 
    );
}


export default Details;