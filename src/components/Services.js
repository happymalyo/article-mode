import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import beach_image from '../img/beach-work.jpg';
import axios from 'axios';

const Service = () => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState("");
    const [allData,setAllData] = useState([]);
    const [services,setFilteredData] = useState(allData);

    //Trying filter
    // Title - Categorie - Sous-categorie
    useEffect(() => {
        axios('http://localhost:5000/services')
        .then(response => {
            console.log(response.data)
            setAllData(response.data);
            setFilteredData(response.data);
            setIsPending(false);
        })
            .catch(error => {
            console.log('Error getting fake data: ' + error);
            setError("Error fetching data from this source")
            setIsPending(false)
        })
    }, []);

    const handleSearch = (event) =>{
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            return data.title.search(value) !== -1 || data.categorie.search(value) !== -1 || data.sous_categorie.search(value) !== -1;
        });
        setFilteredData(result);
    }

    return ( 
        
         <div class="bg-gray-200 flex justify-center" >
         <div class="max-w-md sm:max-w-xl lg:max-w-full mx-0 lg:py-5 lg:px-5">
           <div class="xl:max-w-lg xl:ml-auto">
             <div class="mb-5">
                
                 <label class="inline-block  uppercase tracking-wider bg-indigo-400 px-4 py-3 h-xl text-gray-700 text-sm font-bold mx-0">
                     Search
                 </label>
                 <input
                 onChange={(event) =>handleSearch(event)}
                 placeholder =" education,home service,sport"
                 autocomplete="off"
                 className="shadow py-2 px-3 border border-transparent focus:outline-none focus:border-transparent text-gray-700"
                 type="text"
                 id="username"
                 name="username"
                 />
             </div>
             {error && <div>{error}</div>}
             {isPending && <div>Loading...</div>}
             {services && services.map((service) => (
               
               <div className="flex bg-white w-full mb-5 shadow-xl rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                   <div className="w-5/12 p-2 dark:bg-white rounded-tl-lg rounded-bl-lg">
                       <div style={{backgroundImage: `url(../img/${service.image})`}} className="bg-contain bg-no-repeat bg-center w-full h-full transition-transform duration-300 group-hover:transform group-hover:scale-125"></div>
                   </div>
                   <div className="w-7/12 p-5">
                       <h1 className="md:text-2xl">{service.title.substr(0, 50)}</h1>
                       <h3 className="text-gray-400 dark:text-gray-700">{service.categorie}</h3>
                       <p className="text-red-400 mt-4 text-xl md:text-4xl">{service.title}</p>
                       <div className="mt-4 mb-4">{service.description.substr(0, 100)}</div>
                       <Link to={`/details/${service._id}`} className="mr-2 text-black bg-indigo-300 px-4 my-5 py-2 shadow-xl rounded-lg dark:text-gray-200">details</Link>
                   </div>
               </div>
             ))}
           </div>
         </div>
         <div class="hidden lg:block lg:relative">
          <div class="xl:max-w-lg xl:ml-auto lg:w-full">
               <img class="top-0 right-0 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:object-cover lg:w-full sm:object-center lg:block" src={beach_image} alt="Woman workcationing on the beach" />
               <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                 Vous pouvez maintenant trouver des services partout
                 <br class="hidden lg:inline" /><span class="text-indigo-500">Solution de l'avenir</span>
               </h1>
               <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                 Couloirs Fianara est toujours à votre disposition si vous voudriez nous confier la localisation de votre établissement
               </p>
               <div class="mt-4 sm:mt-6">
                 <Link to="/services/inscription" class="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">S'inscrire gratuitement</Link>
                 <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:block" src={'../img/pub_home_service.png'}  alt="Woman workcationing on the beach" />

               </div>
             </div>                
           </div>
       </div>
    );
}
 
export default Service;