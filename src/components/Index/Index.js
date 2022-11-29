import React, {useState} from 'react';
//import { DataTable } from 'primereact/datatable';
//import { Column } from 'primereact/column';

/*
 <div className="flex justify-content-center">
          <div className="card w-auto">
            <DataTable value={data} responsiveLayout="scroll">
              <Column field="code" header="Lýsing"></Column>
              <Column field="name" header="Dagtal"></Column>
              <Column field="category" header="Klukka"></Column>
              <Column field="quantity" header="Túlkur"></Column>
            </DataTable>
          </div>
        </div>
*/

export function Index() {
  const [loading] = useState(false);

  if(loading){
    return(
      <div className="surface-card shadow-2 border-round p-4">
        <div className="flex justify-content-between align-items-center mb-5">
          <span className="text-xl text-900 font-medium">Beiðni sem þú óskar eftir túlk</span>
        </div>
            <span className="text-xl text-900 font-medium">Engin beiðni ennþá skráð. </span>
      </div>
    )
  }

  return (
    <div className="surface-card shadow-2 border-round p-4">
      <div className="flex justify-content-between align-items-center mb-5">
        <span className="text-xl text-900 font-medium">Beiðni sem um eftir túlk</span>
      </div>
      <ul className="list-none p-0 m-0">
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(234,179,10,.1)', borderColor: 'rgba(234,179,10,.5)' }}>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Viðtal í Marel</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Dagtal: 12/03/23</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka byrjar: 10:00</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka endar: engin skráð</span>
            </div>
            <div>
               <span className="text-yellow-200 ml-5"></span>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span className="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Í biðstöðu</span>
            </div>
        </li>
        
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(33,197,94,.1)', borderColor: 'rgba(33,197,94,.5)' }}>              
            <div>
              <span className="text-green-700 font-bold ml-2">Viðtal í Marel</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Dagtal: 12/03/23</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka byrjar: 10:00</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka endar: engin skráð</span>
            </div>
            <div>
               <span className="text-yellow-200 ml-5">Túlkur: Anna Dagmar </span>
            </div>
          <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
             <span className="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Samþykkt</span>
          </div>
        </li>

        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(330,81,60,.1)', borderColor: 'rgba(330,81,60,.5)' }}>              
        <div>
              <span className="text-red-700 font-bold ml-2">Viðtal í Marel</span>
            </div>
            <div>
               <span className="text-red-700 font-bold ml-2">Dagtal: 12/03/23</span>
            </div>
            <div>
               <span className="text-red-700 font-bold ml-2">Klukka byrjar: 10:00</span>
            </div>
            <div>
               <span className="text-red-700 font-bold ml-2">Klukka endar: engin skráð</span>
            </div>
            <div>
               <span className="text-red-200 ml-5">Túlkur kemst ekki, engin laus  </span>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
             <span className="bg-red-400 text-red-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Hafnað</span>
          </div>
        </li>
       </ul>
    </div>
    
  );
}

/*

<div>
                  <div>
                      <span className="text-red-700 font-bold ml-2">Viðtal í Marel</span>
                  </div>
              </div>
              <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                  <span className="bg-red-400 text-red-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Hafnað</span>
              </div>
        */
