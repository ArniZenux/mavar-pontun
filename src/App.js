//import { useState } from 'react'; 
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

//import { Layout } from './components/Layout/Layout';
import { Navigation } from './components/Nav/Nav';
import { Home } from './pages/home';
import { Order } from './pages/order';

//import { Login } from './pages/login';
  /*
    <Navigation />
        <BrowserRouter>
          <Routes>
            <Route exact path="/"> <Home/> </Route>
            <Route exact path="/order"> <Order/> </Route>
          </Routes>
        </BrowserRouter>
   
   */
function App() {
  return (
    <div>
      <Navigation/>
    </div>
  );
}

export default App;