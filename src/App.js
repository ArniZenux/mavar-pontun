import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Layout } from './components/Layout/Layout';
import { Home } from './pages/home';
import { Order } from './pages/order';
import { Myorder } from './pages/myorder';
import { Check } from './pages/check';
//import { Login } from './pages/login';

function App() {

  /*
  return (
    <div>
      <Login />
    </div>
  )
  */
  
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/myorder" element={<Myorder />} />
            <Route exact path="/check" element={<Check />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
  
}

export default App;