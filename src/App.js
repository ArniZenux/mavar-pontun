//import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
/*
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/home';
import { Order } from './pages/order';
import { Myorder } from './pages/myorder';
import { Check } from './pages/check';
import { NotFound } from './pages/404';
*/
import { Login } from './pages/login';
//import { Register } from './pages/register';

export default function App() {
  
  /*return (
    <div>
      <Register />
    </div>
  )*/
  
  return (
    <div>
      <Login />
    </div>
  )

  /*
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/myorder" element={<Myorder />} />
            <Route exact path="/check" element={<Check />} />
            <Route path="*" element={<NotFound/> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
  */
}