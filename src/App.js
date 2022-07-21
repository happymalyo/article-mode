import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "./components/home";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Product from './components/product-list.component';
import EditProduct from './components/edit-product.component';
import EditClient from './components/edit-client.component';
import CreateProduct from './components/add-product.component';
import CreateClient from './components/add-client.component';
import Client from './components/client-list.component';

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
            <Route path="/clients/list">
              <Client/>
            </Route>
            <Route path="/produits/create">
              <CreateProduct />
            </Route>
            <Route path="/clients/create">
              <CreateClient />
            </Route>
            <Route exact path="/produits/edit/:id">
             <EditProduct/>
            </Route>
            <Route exact path="/clients/edit/:id">
             <EditClient/>
            </Route>
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
