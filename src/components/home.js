import {Link} from 'react-router-dom';
import "../css/home.css";
import useFetch from './useFetch';
import {useState, useEffect} from 'react';
import Header from './header';
const HomePage = () => {
    const {data, isPending, error} = useFetch('http://localhost:5000/produits');
    const [products, setProduct] = useState("");

    useEffect(() => {
        data && setProduct(data)
    }, [data])


    return ( 
        <div className="main">
            <Header />
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <div className="container">
                   {products && products.map((product) =>(
                        <div class="card">
                            {
                                product.image &&
                                <img
                                src={`/images/${product.image}`} 
                                alt={`${product.image}`}
                                />
                            }
                            <div class="prod-infos">{product.article} de Marque <a href="#">{product.marque}</a></div>
                            <div class="price">{product.prix}</div>
                            <Link to={`/produits/details/${product._id}`} className="details mr-2 text-black dark:text-gray-200">details</Link>
                        </div>
                   ))}
            </div>
            <div class="links">
                    <div class="link"><img src="../icons/fb.png" alt="fb-icon" /></div>
                    <div class="link"><img src="../icons/linkedin.png" alt="linkedin" /></div>
                    <div class="link"><img src="../icons/instagram.png" alt="instagram" /></div>
                    <div class="link"><img src="../icons/twitter.png" alt="twitter" /></div>
            </div>
        </div>
    );
}
 
export default HomePage;