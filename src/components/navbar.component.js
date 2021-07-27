import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav class="flex items-center justify-between flex-wrap bg-white w-full p-6">
            <div class="flex items-center flex-shrink-0 text-dark mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <Link to="/" class="font-semibold text-xl text-indigo-500 tracking-tight">Couloirs-Fianara</Link>
            </div>
            <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <Link to="/services" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                    Services
                </Link>
                <Link to="/user" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                    Users
                </Link>
                </div>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                <Link to="/services" class="block border h-full px-6 py-2 rounded-lg shadow-xl hover:outline-0 outline-0 bg-indigo-400 mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                    Login
                </Link>
                <Link to="/services/inscription" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4">
                    Sign up
                </Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;