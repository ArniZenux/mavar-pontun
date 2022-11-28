import React from 'react';
//import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { ProductService } from '../service/ProductService';

export function MyorderForm() {
    //const [products, setProducts] = useState([]);
    //const productService = new ProductService();

    //useEffect(() => {
    //    productService.getProductsSmall().then(data => setProducts(data));
    //}, []); // eslint-disable-line react-hooks/exhaustive-deps
 
    return (
        <div>
            <div className="card">
                <DataTable responsiveLayout="scroll">
                    <Column field="code" header="Lýsing"></Column>
                    <Column field="name" header="Dagtal"></Column>
                    <Column field="category" header="Klukka"></Column>
                    <Column field="quantity" header="Túlkur"></Column>
                </DataTable>
            </div>
        </div>
    );
}