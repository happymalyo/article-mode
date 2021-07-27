import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Services = () => {
    const {data, isPending, error} = useFetch('http://localhost:5000/services');
    const [services, setService] = useState("");
    const classStyle = {
        container : `flex bg-white w-full mb-2 shadow-xl rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2xl transition-shadow duration-300`,
        containerBox : `mt-8 px-4 py-4 bg-white 
                         dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer`
    };

    const handleDelete = (id) => {
        fetch('http://localhost:5000/services/'+id, {
            method: 'DELETE'
        }).then(_ => {
            console.log('blog deleted');
            setService(services.filter((e) => e._id !==  id))
        })
    }

    useEffect(() => {
        data && setService(data)
    }, [data])
    

    return ( 
        <div className="flex flex-col
                        items-center justify-center">
            <h2 class="text-indigo-500 text-xl uppercase tracking-wider">
				Liste  de Services
			</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {services && services.map((service) => (
            <div class={classStyle.container}> 
            
                <div class={classStyle.containerBox}>
                    
                         <div class="flex justify-between relative pt-6">
                         <div className="flex items-center top-0 justify-between w-100 h-5 py-2 px-2 rounded-lg shadow-xl bg-indigo-400 absolute">
                             <Link to={`/services/${service._id}`} className="mr-2 text-black dark:text-gray-200">details</Link>
                             <Link to={`/services/edit/${service._id}`} className="mr-2 text-black dark:text-gray-200">modifier</Link>
                             <span className="mr-2 text-black dark:text-indigo-200" onClick={() => handleDelete(service._id)}>delete</span>
                         </div>
                         
                         {
                             service.image &&
                             <img
                             class="h-12 w-12 rounded-full object-cover"
                             src={ `../img/${service.image}`}
                             alt="Votre logo" />}
 
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Title</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                                 {service.title}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Categories</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                                {service.categorie}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Sous-categories</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                             {service.sous_categorie}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Description</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                              {service.description}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Adresse</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                              {service.adresse}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>email</span>
                             <span class="mt-2 text-blue-400">
                                 {service.email}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Telephone</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                                 {service.phone}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>site web</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                                 {service.site_web}
                             </span>
                         </div>
                         <div
                             class="ml-4 flex flex-col capitalize text-gray-600
                             dark:text-gray-400">
                             <span>Ville</span>
                             <span class="mt-2 text-black dark:text-gray-200">
                                {service.ville}
                             </span>
                         </div>
                     </div>
                </div> 
            </div>
            ))}
        </div>
     );
}
 
export default Services;