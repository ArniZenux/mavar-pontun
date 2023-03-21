import React, { useState, useContext, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { UserContext } from '../../context/UserContext';

const apiUrl = process.env.REACT_APP_API_URL;

export function UserInfo() {
  const [ userContext ] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [custom, setCustom] = useState([]);
  const [editingRows, setEditingRows] = useState({});

  useEffect(() => {
    async function fetchData() {
      setLoading(true); 
      setError(null); 

      let json; 
      const requestOptions = {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userContext.token}`,
        },
      }

      try {
        const result = await fetch(apiUrl + `/custom/`, requestOptions);
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
      setCustom(json); 
    }
  fetchData(); 
},[userContext]);

if(error){
   return (
    <div className="surface-card shadow-2 border-round p-4">
      <div className="flex mb-5">
         <div className="text-900 text-3xl font-medium mb-3">Nær ekki samband við vefþjónustuna...</div>
      </div>
    </div>
   )
}

if(loading){
   return (
    <div className="surface-card shadow-2 border-round p-4">
      <div className="flex mb-5">
        <div className="text-900 text-3xl font-medium mb-3">Sæki gögn...</div>
      </div>
    </div>
   )
}

const onRowEditComplete2 = async (e) => {
  let _APIData = [...custom];
  let { newData, index } = e;
  let success = true; 

  _APIData[index] = newData;

  try {
    
    console.log(newData)
    console.log(newData.id);

    if( newData.znamec === '' || newData.phonenr === '' || newData.email === '' ) {
      console.log('Empty');
    } else {
      const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      };
      
      let url = apiUrl + '/custom/updatecustom/' + newData.zidcustom; 
      
      success = await fetch(url , requestOptions);
      
      if(success){
        setCustom(_APIData);
      }
    }
    }
    catch(e){
      console.log("Error", e);     
  }
}

const onRowEditChange = (e) => {
  setEditingRows(e.data);
}

const textEditor = (options) => {
  return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
}

const textEditor2 = (options) => {
  return <InputMask id="text" mask="999-9999" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />
}

return(
  <div className="surface-card shadow-2 border-round p-4">
    <div className="flex mb-5">
      <span className="text-xl text-900 font-medium">Breyta notanda</span>
    </div>
      <DataTable value={custom} editMode="row" dataKey='id' size="small" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll">
        <Column field="znamec" header="Fullt nafn" editor={(options) => textEditor(options)}></Column>
        <Column field="phonenr" header="Símanúmer" editor={(options) => textEditor2(options)}></Column>
        <Column field="email" header="Tölvupóstur" editor={(options) => textEditor(options)}></Column>
        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
      </DataTable>
  </div>
  )
}