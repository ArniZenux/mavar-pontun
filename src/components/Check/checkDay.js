import React, { useState, useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { UserContext } from '../../context/UserContext';

const apiUrl = process.env.REACT_APP_API_URL;

export function CheckDay( {id}) {
  const [products, setProducts] = useState([]);
  const [ userContext ] = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      let json; 
      let find_day = id.toLocaleDateString('IS');
      
      let zdata = [];
      zdata.push(find_day);
      console.log(zdata); 

     const requestOptions = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userContext.token}`,
        },
        body: JSON.stringify(zdata)
      } 

      try {
        let url = apiUrl + '/beidni/checkBeidni';
        
        const result = await fetch(url, requestOptions);

        if(!result.ok){
          throw new Error('Fetch data is not ok');
        }
        json = await result.json();
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        return; 
      }
      setProducts(json); 
  }
   fetchData(); 
  },[id, userContext]);

 return (
    <div>
       <div className="card">
        <DataTable value={products} size="small" rows={10} responsiveLayout="scroll">
          <Column field="zname" header="Túlkur er frátekinn á tíma." style={{ width: '25%' }}></Column>
          <Column field="start_time" header="Klukka byrjar" style={{ width: '25%' }}></Column>
          <Column field="last_time" header="Klukka endir" style={{ width: '25%' }}></Column>
        </DataTable>
      </div>
    </div>  
  );
}