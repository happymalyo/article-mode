import {Link} from 'react-router-dom';
const HomePage = () => {
    return ( 
        <div className="home-page">
            <div class="pt-24 bg-white-60">
                <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                
                    <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                    <p class="uppercase tracking-loose w-full">Vous cherchez des services ?</p>
                    <h1 class="my-4 text-5xl font-bold text-gray-400 leading-tight">
                        Découvrez notre nouvelle solution digitale ! 😃 
                    </h1>
                    <p class="leading-normal text-2xl mb-8">
                        Touvez ici des plusieurs secteurs d'activité basés à Fianarantsoa
                    </p>
                    <Link to="/services" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Trouver des services
                    </Link>
                    </div>
                    <div class="w-full md:w-3/5 py-6 text-center">
                    <img class="w-full md:w-4/5 z-50" alt="background" src="../img/undraw_adventure_map_hnin.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;