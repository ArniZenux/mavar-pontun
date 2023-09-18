import React, {useCallback, useContext, useEffect } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/home';
import { Order } from './pages/order';
import { Myorder } from './pages/myorder';
import { Check } from './pages/check';
import { Tulkur } from './pages/interpreters';
import { NotFound } from './pages/404';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Reset } from './pages/reset';
import { UserPage } from './pages/user';
import { UserContext } from './context/UserContext';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  const [userContext, setUserContext] = useContext(UserContext); 

  const verifyUser = useCallback(() => {
    
    setUserContext(oldValues => {
      return { ...oldValues, token : null }
    })
  }, [setUserContext]);

  useEffect( () => {
    verifyUser();
  }, [verifyUser]);

  return !userContext.token ? (
    <div>
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="*" element={<NotFound/> } />
          </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/myorder" element={<Myorder />} />
            <Route path="/tulkar" element={<Tulkur />} />
            <Route path="/check" element={<Check />} />
            <Route path="/user/:id" element={<UserPage />} />
            <Route path="*" element={<NotFound/> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;