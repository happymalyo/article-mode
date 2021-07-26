import {useState,useEffect} from 'react';
import useFetch from './useFetch';

const Services = () => {
    const {data: services, isPending, error} = useFetch('http://localhost:5000/services');
    return ( 
        <div className="flex flex-col
                        items-center justify-center">
            <h2 class="text-center text-indigo-500 text-xl uppercase tracking-wider mb-1">
				User list
			</h2>
			<div
				class="pb-2 flex items-center justify-between text-gray-600
				dark:text-gray-400 border-b dark:border-gray-600">
                <div
				class="mt-8 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">

				<div class="flex justify-between">

					<img
						class="h-12 w-12 rounded-full object-cover"
						src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
						alt="" />

					<div
						class="ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>name</span>
						<span class="mt-2 text-black dark:text-gray-200">
							enoshima junko
						</span>
					</div>

					<div
						class="ml-12 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>login</span>
						<span class="mt-2 text-black dark:text-gray-200">
							zetsbuo
						</span>

					</div>

				</div>

				<div class="flex">

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>project</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Aero treck
						</span>
					</div>

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>role</span>
						<span class="mt-2 text-black dark:text-gray-200">
							Front-End
						</span>
					</div>

					<div
						class="mr-16 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>status</span>
						<span class="mt-2 text-yellow-600 dark:text-yellow-400">
							in work
						</span>
					</div>

					<div
						class="mr-8 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
						<span>final date</span>
						<span class="mt-2 text-green-400 dark:text-green-200">
							20.02.2020 11:00
						</span>
					</div>

				</div>

			</div>     
             </div>
           

        </div>
     );
}
 
export default Services;