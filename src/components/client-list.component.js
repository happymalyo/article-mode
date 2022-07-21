import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../index.css';
// import 'bootstrap/dist/css/bootstrap.css';

const Client = () => {
    const {data, isPending, error} = useFetch('http://localhost:5000/clients');
    const [clients, setClient] = useState("");

    useEffect(() => {
        data && setClient(data)
    }, [data])

    console.log(clients);

	const handleDelete = (id) => {
        fetch('http://localhost:5000/clients/delete/'+id, {
            method: 'DELETE'
        }).then(_ => {
            console.log('client deleted');
            setClient(clients.filter((e) => e._id !==  id))
        })
    }

return(
   <div class="bg-white p-8 rounded-md w-full">
		<h2 class="text-indigo-500 text-xl uppercase font-semibold tracking-wider">
					Article de Mode
		</h2>
		{error && <div>{error}</div>}
		{isPending && <div>Loading...</div>}
		<div class=" flex items-center justify-between pb-6">
				<div>
					<button class=" mr-2 bg-indigo-200 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
						<Link to='/clients/list' className=" text-black dark:text-gray-200">Clients</Link>
					</button>
					<button class="mr-2 bg-indigo-200 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
						<Link to='/admin' className=" text-black dark:text-gray-200">Produits</Link>
					</button>
				</div>
				<div class="flex items-center justify-between">
					<div class="flex bg-gray-50 items-center p-2 rounded-md">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd" />
						</svg>
						<input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..."/>
					</div>
						<div class="lg:ml-40 ml-10 space-x-8">
							<button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"> <Link to='/clients/create' className="mr-2 text-black dark:text-gray-200">Nouveau client</Link></button>
						</div>
				</div>
		</div>
			<div>
				<div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
					<div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
						<table class="min-w-full leading-normal">
							<thead>
								<tr>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Nom
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Prénom
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Adresse
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Ville
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Téléphone
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
							{clients && clients.map((client) =>(
								<tr>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{client.nom}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{client.prenom}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{client.adresse}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{client.ville}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{client.telephone}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span
											class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span aria-hidden
												class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
											<span class="relative">
											<Link to={`/clients/edit/${client._id}`} className="mr-2 text-black dark:text-gray-200">edit</Link>
											</span>
										</span>
										<span
											class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span aria-hidden
												class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
											<span class="relative cursor-pointer" onClick={() => handleDelete(client._id)}>delete</span>
										</span>
									</td>
								</tr>
								))} 
							</tbody>
						</table>
						<div
							class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
							<span class="text-xs xs:text-sm text-gray-900">
								Showing 1 to 4 of 50 Entries
							</span>
							<div class="inline-flex mt-2 xs:mt-0">
								<button
									class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
									Prev
								</button>
								&nbsp; &nbsp;
								<button
									class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
   )
}
export default Client;