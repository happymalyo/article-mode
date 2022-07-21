import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../index.css';
// import 'bootstrap/dist/css/bootstrap.css';

const Product = () => {
    const {data, isPending, error} = useFetch('http://localhost:5000/produits');
    const [products, setProduct] = useState("");

    useEffect(() => {
        data && setProduct(data)
    }, [data])

    console.log(products);

	const handleDelete = (id) => {
        fetch('http://localhost:5000/produits/delete/'+id, {
            method: 'DELETE'
        }).then(_ => {
            console.log('product deleted');
            setProduct(products.filter((e) => e._id !==  id))
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
							<button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"> <Link to='produits/create' className="mr-2 text-black dark:text-gray-200">Nouvel article</Link></button>
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
										
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Article
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Couleur
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Marque
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Taille
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Prix
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Qualité
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Type
									</th>
									<th
										class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
							{products && products.map((product) =>(
								<tr>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<div class="flex items-center">
											<div class="flex-shrink-0 w-10 h-10">
												<img class="w-full h-full rounded-full"
													src={`../images/${product.image}`}
													alt={product.image} />
											</div>
										</div>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{product.article}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{product.couleur}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{product.marque}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{product.taille}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">{product.prix}</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">
											{product.qualite}
										</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<p class="text-gray-900 whitespace-no-wrap">
											{product.type}
										</p>
									</td>
									<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
										<span
											class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span aria-hidden
												class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
											<span class="relative">
											<Link to={`/produits/edit/${product._id}`} className="mr-2 text-black dark:text-gray-200">edit</Link>
											</span>
										</span>
										<span
											class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
											<span aria-hidden
												class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
											<span class="relative cursor-pointer" onClick={() => handleDelete(product._id)}>delete</span>
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
export default Product;