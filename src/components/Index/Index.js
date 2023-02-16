import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import './DataTableDemo.css';

const apiUrl = process.env.REACT_APP_API_URL;

export function Index() {
  let emptyPontun = {
    id: null,
    zdesc: '',
    place : '',
    zday: '',
    start_time: '',
    last_time: '',
    zstatus: 'Í vinnslu',
    zchecked: '',
    explanation: '',
    interpreter: ''
  };

  const interval = useRef(0); 

  const [error, setError] = useState(null);
  const [product, setProduct] = useState(emptyPontun);
  const [products, setProducts] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  
  useEffect(() => {
    interval.current = setInterval(() => { fetchData() } , 300);
    
    async function fetchData() {
      setError(null); 
      let json; 

      try {
        let url = apiUrl + `/beidni/byBeidni`;
        //console.log(url); 
        const result = await fetch(url);
        if(!result.ok){
          throw new Error('Ekki ok');
        }
        json = await result.json();
        //console.log(json);
        
      }
      catch(e){
        console.warn('unable to fetch data', e); 
        setError('Gat ekki sótt efni í vefþjónustu - Bilað í þjónustuna.');
        return; 
      }
      setProducts(json); 
    }

    return () => {
      clearInterval(interval.current);
      interval.current = null; 
    }
  },[]);

  if(error){
    return (
        <div className="card">
          <div className="text-900 text-3xl font-medium mb-3">Nær ekki samband við vefþjónustuna...</div>
        </div>
    )
  }

  if( products === null){
    return(
        <div className="surface-card shadow-2 border-round p-4">
          <div className="flex justify-content-between align-items-center mb-5">
            <span className="text-xl text-900 font-medium">Beiðni um táknmálstúlk</span>
          </div>
              <span className="text-xl text-900 font-medium">Augnblik.....</span>
        </div>
    )
  }

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  }

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  }

  const updateProduct = async () => {
    setSubmitted(true);
    
    if(product.zdesc.trim()){
      let zdata = [];
      let success = true; 
      let url = apiUrl + '/beidni/updateBeidni';
      
      zdata.push(product.id); 
      zdata.push(product.place); 
      zdata.push(product.zdesc); 
      zdata.push(product.zday); 
      zdata.push(product.start_time); 
      zdata.push(product.last_time); 

      const requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(zdata)
      };
      
      success = await fetch(url, requestOptions);
        
      if(success){
        console.log('');
      }
      else {
        console.error("Don't success");
      }
  
      setProductDialog(false);
    }
  }

  const afbokaProduct = async () => {
    let zdata = [];
    let success = true; 
    let url = apiUrl + '/beidni/afbokaBeidni';

    zdata.push(product.id); 

    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(zdata)
    };
    
    success = await fetch(url, requestOptions);
      
    if(success){
      console.log('');
    }
    else {
      console.error("Don't success");
    }

    setDeleteProductDialog(false);
  }

  const editProduct = (product) => {
    setProduct({...product});
    setProductDialog(true);
  }

  const confirmDeleteProduct = (product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  }

  const onInputChange = (e, name) => {
    const val = (e.target && e.target.value) || '';
    let _product = {...product};
    _product[`${name}`] = val;

    setProduct(_product);
  }

  const checkedBodyTemplete = (rowData) => {
    if(rowData.zchecked === 0){
      return (
        <React.Fragment>
           <Button icon="pi pi-circle" disabled className="p-button-rounded p-button-text" />
         </React.Fragment>
      )}
    if(rowData.zchecked === 1){
      return (
        <React.Fragment>
           <Button icon="pi pi-circle-fill" disabled className="p-button-rounded p-button-text" />
         </React.Fragment>
      )}
  }

  const statusBodyTemplate = (rowData) => {
    if(rowData.zstatus === 0){
      return <span className={`product-badge status-${rowData.zstatus} pr-3 pl-3 pt-1 pb-1`}>Enginn laus</span>;
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

  const actionBodyTemplate = (rowData) => {
    if(rowData.zstatus === 0 || rowData.zstatus === 3 ){
      return(
        <React.Fragment>
          <Button disabled  icon="pi pi-ban" className="p-button-rounded p-button-danger mr-2" />
        </React.Fragment>
      )
    }
    else{
      return (
        <React.Fragment>
          <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
          <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
        </React.Fragment>
      );
    }
  }

  const productDialogFooter = (
    <React.Fragment>
        <Button label="Hætta" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
        <Button label="Breyta" icon="pi pi-check" className="p-button-text" onClick={updateProduct} />
    </React.Fragment>
  );

  const deleteProductDialogFooter = (
    <React.Fragment>
        <Button label="Nei" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
        <Button label="Já" icon="pi pi-check" className="p-button-text" onClick={afbokaProduct} />
    </React.Fragment>
  );

  return(
    <div className="surface-card shadow-2 border-round p-4">
      <div className="flex mb-5">
        <span className="text-xl text-900 font-medium">Beiðni um táknmálstúlk</span>
      </div>
        
        <DataTable value={products} dataKey="id" size="small" paginator rows={10} 
        responsiveLayout="scroll" emptyMessage="Engin beiðni ennþá skráð.">
          <Column field="checked" body={checkedBodyTemplete} style={{ minWidth: '2rem' }}></Column>
          <Column field="zdesc" header="Lýsing"></Column>
          <Column field="place" header="Staður"></Column>
          <Column field="zday" header="Dagur"></Column>
          <Column field="start_time" header="Klukka byrjar"></Column>
          <Column field="last_time" header="Klukka endir"></Column>
          <Column field="zstatus" header="Staða" body={statusBodyTemplate} style={{ minWidth: '5rem' }}></Column>
          <Column field="explanation" header="Skýring"></Column>
          <Column field="interpreter" header="Túlkur"></Column>
          <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
        </DataTable>

        <Dialog visible={productDialog} style={{ width: '450px' }} header="Breyta pöntun" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
          
          <div className="field">
            <label htmlFor="place">Staður</label>
            <InputText id="place" value={product.place} onChange={(e) => onInputChange(e, 'place')} required rows={3} cols={20} className={classNames({ 'p-invalid': submitted && !product.place })} />
            {submitted && !product.place && <small className="p-error">Vantar staður.</small>}
          </div>

          <div className="field">
            <label htmlFor="zdesc">Lýsing</label>
            <InputTextarea id="zdesc" value={product.zdesc} autoResize  onChange={(e) => onInputChange(e, 'zdesc')} required rows={3}  className={classNames({ 'p-invalid': submitted && !product.zdesc })} />
            {submitted && !product.zdesc && <small className="p-error">Vantar lýsing.</small>}
          </div>

          <div className="field">
            <label htmlFor="zday">Dagur</label>
            <InputText id="zday" value={product.zday} onChange={(e) => onInputChange(e, 'zday')} required rows={3} cols={10}  className={classNames({ 'p-invalid': submitted && !product.zday })} />
            {submitted && !product.zday && <small className="p-error">Vantar dagur.</small>}
          </div>

          <div className="field">
            <label htmlFor="start_time">Klukka byrjar</label>
            <InputText id="start_time" type="time" value={product.start_time} onChange={(e) => onInputChange(e, 'start_time')} required rows={3} cols={10}  className={classNames({ 'p-invalid': submitted && !product.start_time })} />
            {submitted && !product.start_time && <small className="p-error">Vantar klukka.</small>}
          </div>

          <div className="field">
            <label htmlFor="last_time">Klukka endir</label>
            <InputText id="last_time" type="time" value={product.last_time} onChange={(e) => onInputChange(e, 'last_time')} required rows={3} cols={10}  className={classNames({ 'p-invalid': submitted && !product.last_time })} />
            {submitted && !product.last_time && <small className="p-error">Vantar klukka.</small>}
          </div>
  
        </Dialog>

        <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Afbókun staðfest?" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
  
          <div className="confirmation-content">
            <label htmlFor="zdesc"><b>{ product.zdesc }</b></label><br/><br/>
            <span>Viltu að afbóka?</span>
          </div>
  
        </Dialog>
    </div>
  )
}