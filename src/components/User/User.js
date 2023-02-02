import React from 'react';
//import React, {useState, useEffect} from 'react';

//const apiUrl = process.env.REACT_APP_API_URL;

export function UserInfo() {
  /*const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      setError(null); 

    let json; 

    try {
      const result = await fetch(apiUrl + `/beidni/byBeidni`);
      if(!result.ok){
        throw new Error('Ekki ok');
      }
      json = await result.json();
      console.log(json); 
    }
    catch(e){
      console.warn('unable to fetch data', e); 
      setError('Gat ekki sótt efni í vefþjónustu - Bilað í þjónustuna.');
      return; 
    }
    finally{
      setLoading(false); 
    }
    setProducts(json); 
   }
   fetchData(); 
},[]);

if(error){
   return (
      <div className="card">
         <div className="text-900 text-3xl font-medium mb-3">Nær ekki samband við vefþjónustuna...</div>
      </div>
   )
}

if(loading){
   return (
     <div className="card">
         <div className="text-900 text-3xl font-medium mb-3">Sæki gögn...</div>
     </div>
   )
}*/


return(
  <div className="surface-card shadow-2 border-round p-4">
    <div className="flex mb-5">
      <span className="text-xl text-900 font-medium">Breyta notanda</span>
    </div>
  
    </div>
  )
}