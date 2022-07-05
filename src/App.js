import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "./components/home";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Product from './components/product-list.component';
import EditProduct from './components/edit-product.component';

function App() {
  return (
    <Router>
        
        <Switch>
        
            <Route exact path="/">
            <HomePage />
            <Footer />
            </Route>
            <Route path="/admin">
            <Product/>
            </Route>
            <Route exact path="/produits/edit/:id">
             <EditProduct/>
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
