import useFetch from './useFetch';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

const Product = () => {
    const {data, isPending, error} = useFetch('http://localhost:5000/produits');
    const [products, setProduct] = useState("");

    useEffect(() => {
        data && setProduct(data)
    }, [data])

    return(
        <div className="product">
            <h2 class="title">
				Liste  de Produits
			</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {products && products.map((product) =>(
                <div>
                    <p>{product.article}</p>
                    <p>{product.prix}</p>
                    <p>{product.image}</p>
                </div>
            ))}
        </div>
    )
}
export default Product;