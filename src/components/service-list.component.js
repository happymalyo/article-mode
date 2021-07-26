import useFetch from './useFetch';

const Services = () => {
    const {data: services, isPending, error} = useFetch('http://localhost:5000/services');
    const classStyle = {
        container : `flex bg-white w-full mb-5 shadow-xl rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2xl transition-shadow duration-300`,
        containerBox : `mt-8 px-4 py-4 bg-white 
                         dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer`
    };

    return ( 
        <div className="flex flex-col
                        items-center justify-center">
            <h2 class="text-indigo-500 text-xl uppercase tracking-wider">
				User list
			</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {services && services.map((service) => (
            <div class={classStyle.container}>
            
                <div class={classStyle.containerBox}>
                    
                         <div class="flex justify-between relative pt-6">
                         <div className="flex items-center top-0 justify-between w-100 h-5 py-2 px-2 rounded-lg shadow-xl bg-indigo-400 absolute">
                             <span className="mr-2 text-black dark:text-gray-200">modifier</span>
                             <span className="mr-2 text-black dark:text-indigo-200">delete</span>
                         </div>
                         <img
                             class="h-12 w-12 rounded-full object-cover"
                             src={service.image && `../img/${service.image}`}
                             alt="" />
 
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
                                 enoshima junko
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