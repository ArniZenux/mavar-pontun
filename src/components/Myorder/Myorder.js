import React, { useState, useEffect } from 'react';
//import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { InputText } from 'primereact/inputtext';

const apiUrl = process.env.REACT_APP_API_URL;

export function MyorderForm() {
  //const [globalFilterValue1, setGlobalFilterValue1] = useState('');
  const [loading, setLoading] = useState(false);
  //const [loading1, setLoading1] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  //const [filters1, setFilters1] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      //setLoading1(false); 
      setError(null); 
      //initFilters1();

    let json; 

    try {
      const result = await fetch(apiUrl + `/beidni/byBeidni`);
      if(!result.ok){
        throw new Error('Ekki ok');
      }
      json = await result.json();
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

  /*const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    _filters1['global'].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  }
  
  const initFilters1 = () => {
    setFilters1({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'zstatus': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });
    setGlobalFilterValue1('');
  }

  const renderHeader1 = () => {
    return (
        <div className="flex justify-content-end">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue1} onChange={onGlobalFilterChange1} placeholder="Leita stöðu" style={{ width: '20%' }}/>
            </span>
        </div>
    )
  }

  const header1 = renderHeader1();
  */

  if(error){
    return (
      <div className="card">
        <div className="text-900 text-3xl font-medium mb-3">Nær ekki samband við vefþjónustuna...</div>
      </div>
    )
  }

  if(loading){
    return(
      <div className="surface-card shadow-2 border-round p-4">
        <div className="flex justify-content-between align-items-center mb-5">
          <span className="text-xl text-900 font-medium">Beiðni um táknmálstúlk</span>
        </div>
            <span className="text-xl text-900 font-medium">Sæki gögn.....</span>
      </div>
  )
  }

  if( products.length === 0){
    return(
        <div className="surface-card shadow-2 border-round p-4">
          <div className="flex justify-content-between align-items-center mb-5">
            <span className="text-xl text-900 font-medium">Beiðni um táknmálstúlk</span>
          </div>
              <span className="text-xl text-900 font-medium">Engin beiðni hafa skráð ennþá.</span>
        </div>
    )
  }

  const statusBodyTemplate = (rowData) => {
    if(rowData.zstatus === 0){
      return <span className={`product-badge status-${rowData.zstatus} pr-3 pl-3 pt-1 pb-1`}>Engin laus</span>;
    }
    if(rowData.zstatus === 1){
      return <span className={`product-badge status-${rowData.zstatus} pr-3 pl-3 pt-1 pb-1`}>Túlkur kemur</span>;
    }
    else if(rowData.zstatus === 2){
      return <span className={`product-badge status-${rowData.zstatus} pr-3 pl-3 pt-1 pb-1`}>Biðstaða</span>;
    }
    else if(rowData.zstatus === 3){
      return <span className={`product-badge status-${rowData.zstatus} pr-3 pl-3 pt-1 pb-1`}>Afbókun</span>;
    }
  }

  return (
    <div className="surface-card shadow-2 border-round p-4">
    <div className="flex mb-5">
      <span className="text-xl text-900 font-medium">Pöntunarlisti</span>
    </div>
      
    <div className="card">
    
      <DataTable value={products} size="small" paginator rows={10} responsiveLayout="scroll">
        <Column field="zdesc" header="Lýsing"></Column>
        <Column field="place" header="Staður"></Column>
        <Column field="zday" header="Dagur"></Column>
        <Column field="start_time" header="Klukka byrjar"></Column>
        <Column field="last_time" header="Klukka endir"></Column>
        <Column field="zstatus" header="Staða" body={statusBodyTemplate} style={{ minWidth: '5rem' }}></Column>
        <Column field="explanation" header="Skýring"></Column>
        <Column field="interpreter" header="Túlkur"></Column>
      </DataTable>
    </div>
  </div>

  );
}