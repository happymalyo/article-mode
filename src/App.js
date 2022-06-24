import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "./components/Home";
import Footer from "./Footer";
import NotFound from "./NotFound";
import Product from './components/product-list.component';

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
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
