import "./App.css";
import Product from "./components/Product";
import products from "./data/products.json";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import ServiceList from './components/service.component';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={ExerciseList} />
            <Route path="/edit/:id" component = {EditExercise} />
            <Route path="/create" component = {CreateExercise} />
            <Route path="/user" component = {CreateUser} />
            <Route path="/service" component = {ServiceList} />
            <Route exact path="/products">
            <div class="bg-gray-200 flex">
                <div class="max-w-md sm:max-w-xl lg:max-w-full mx-0 lg:py-5 lg:px-5">
                  <div class="xl:max-w-lg xl:ml-auto">
                    <div class="mb-5">
                        <label class="inline-block uppercase tracking-wider bg-indigo-400 px-4 py-3 h-xl text-gray-700 text-sm font-bold mx-0">
                            Search
                        </label>
                        <input
                        className="shadow appearance-none border  py-2 px-3 text-gray-700"
                        type="text"
                        id="username"
                        name="username"
                        />
                    </div>
                    {products.map((product) => (
                      <Product product={product} key={product.id} />
                    ))}
                  </div>
                </div>
                <div class="hidden lg:block lg:relative">
                 <div class="xl:max-w-lg xl:ml-auto">
                      <img class="h-10" src="./img/logo.svg" alt="Workcation" />
                      <img class="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" src="/img/beach-work.jpg" alt="Woman workcationing on the beach" />
                      <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                        You can work from anywhere.
                        <br class="hidden lg:inline" /><span class="text-indigo-500">Take advantage of it.</span>
                      </h1>
                      <p class="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
                        Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
                      </p>
                      <div class="mt-4 sm:mt-6">
                        <Link href="#" class="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold sm:text-base">Book your escape</Link>
                      </div>
                    </div>                
                  </div>
              </div>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
