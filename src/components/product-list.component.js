import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../index.css';
// import 'bootstrap/dist/css/bootstrap.css';

const Product = () => {
    const {data, isPending, error} = useFetch('http://localhost:5000/produits');
    const [products, setProduct] = useState("");
    const classStyle = {
        container : `flex bg-white w-full mb-2 shadow-xl rounded-lg dark:bg-gray-300 group overflow-hidden hover:shadow-2xl transition-shadow duration-300`,
        containerBox : `mt-8 px-4 py-4 bg-white 
                         dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer`
    };

    useEffect(() => {
        data && setProduct(data)
    }, [data])

    return(
        <div className="flex flex-col
                        items-center justify-center">
            <h2 class="text-indigo-500 text-xl bg-red-500 uppercase tracking-wider">
				Liste  de Produits
			</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
             {products && products.map((product) =>(
                <div class={classStyle.container}> 
            
                    <div class={classStyle.containerBox}>
                        
                            <div class="flex justify-between relative pt-6">
                            <div className="flex items-center top-0 justify-between w-100 h-5 py-2 px-2 rounded-lg shadow-xl bg-indigo-400 absolute">
                                <Link className="mr-2 text-black dark:text-gray-200">details</Link>
                                <Link  className="mr-2 text-black dark:text-gray-200">modifier</Link>
                                <span className="mr-2 text-black dark:text-indigo-200" onClick="">delete</span>
                            </div>
                            </div>
                    </div>
                </div>
            ))} 

       
     </div>
    )
}
export default Product;