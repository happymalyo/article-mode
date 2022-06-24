import {Link} from 'react-router-dom';
import "../css/home.css";
const HomePage = () => {
    return ( 
        <div className="main">
            <div class="header">
                <h1><a href="index.html">Arti <span class="com">Mode</span></a></h1>
                <nav>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="artist.html">Artistes</a></li>
                        <li><a href="evenement.html">Evenement</a></li>
                        <li><a href="index.html">Vente exposition</a></li>
                        <li><a href="#" class="contact">Apropos</a></li>
                        
                    </ul>
                </nav>
            </div>
            <div className="container">
                    <div class="card">
                        <img src="../images/img1.jpg" alt="img1"/>
                        <div class="artist">By <a href="#">John Elie</a></div>
                        <div class="price">55.000 Ar</div>
                        <div class="details"><a href="detailsFille.html">Details</a></div>
                    </div>
                    <div class="card">
                        <img src="../images/img2.jpg" alt="img2"/>
                        <div class="artist">By <a href="#">John Elie</a></div>
                        <div class="price">55.000 Ar</div>
                        <div class="details">Details</div>
                    </div>
                    <div class="card">
                        <img src="../images/img3.jpg" alt="img3"/>
                        <div class="artist">By <a href="#">John Elie</a></div>
                        <div class="price">55.000 Ar</div>
                        <div class="details">Details</div>
                    </div>
                    <div class="card">
                        <img src="../images/img4.jpg" alt="img4"/>
                        <div class="artist">By <a href="#">John Elie</a></div>
                        <div class="price">55.000 Ar</div>
                        <div class="details"><a href="#">Details</a></div>
                    </div>
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