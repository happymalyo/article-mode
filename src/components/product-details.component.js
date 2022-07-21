import useFetch from './useFetch';
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import config from '../config/config.json';

const Details = () => {
    const {id} = useParams();
    const {data: product, isPending, error} = useFetch('http://localhost:5000/produits/' +id);
    
    return(
        <div className="align-shadow-xl m-auto px-5 py-5 w-2/5 sm:w-3/4">
            
            {error && <div className="flex flex-col items-center justify-center">{error}</div>}
            {isPending && <div className="flex flex-col items-center justify-center">Loading...</div>}
            {product && 
            
                <div class="bg-gray-100 flex">
                <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
                <div class="xl:max-w-lg xl:ml-auto">
                
                    <span class="text-3xl uppercase text-indigo-500">{'>'+product.type}</span>
                    <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                    {product.article}
                    </h1>
                    <span class="mt-1 text-1xl text-gray-600 leading-tight sm:mt-8 sm:text-4xl lg:text-1xl xl:text-4xl">
                    {product.marque} en {product.qualite}
                    <br class="hidden lg:inline" />
                    </span>
                    <br class="hidden lg:inline" />
                    <span class="text-sm text-gray-500 text-2xl">{product.prix+' MGA'}</span>
                    <br class="hidden lg:inline" />
                    <span class="text-sm text-gray-500">{'Couleur : '+product.couleur}</span>
                    <br/>
                    <span class="text-sm text-gray-500">{'Taille: '+product.taille}</span> <br class="hidden lg:inline" />
                    <div class="mt-4 sm:mt-6">  
                    <Link to="/" class="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Retour</Link>
                    </div>
                </div>
                </div>
                <div class="hidden lg:block lg:w-1/2 lg:relative">
                {product.image && 
                <img class="absolute inset-0 h-full w-full object-cover object-center" src={`${config.base_url}/images/${product.image}`}  alt="Woman workcationing on the beach "/>}
                </div>
            </div>
            }
        </div> 
    );
}


export default Details;