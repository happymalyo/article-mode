import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar.component';
import ServiceList from './components/service-list.component';
import NavbarAdmin from "./components/navbar-admin.component";
import CreateService from "./components/create-service.component";
import EditService from "./components/edit-service.component";
import ServiceDetails from "./components/service-details.component";
import Details from "./components/Details";
import Service from "./components/Services";
import HomePage from "./components/Home";
import Inscription from "./components/Inscription";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
        
        <Switch>
        
            <Route exact path="/">
            <Navbar />
            <HomePage />
            <Footer />
            </Route>
            <Route path="/services/create">
              <NavbarAdmin />
              <CreateService />
            </Route>
            <Route path="/services/inscription">
              <Navbar />
              <Inscription />
            </Route>
            <Route path="/services/dashboard">
            <NavbarAdmin />
             <ServiceList />
            </Route>
            <Route exact path="/details/:id">
             <Navbar />
             <Details />
             <Footer />
            </Route> 
            <Route exact path="/services/:id">
             <NavbarAdmin />
             <ServiceDetails />
            </Route>
            <Route exact path="/services/edit/:id">
             <NavbarAdmin />
             <EditService />
            </Route> 
            <Route exact path="/services">
             <Navbar />
             <Service />
             <Footer />
            </Route>
          
            <Route exact path="*">
                <NotFound />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
