//import React, { useState, useEffect } from 'react';
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export function MyorderForm() {

  return (
    <div className="card">
       <div className="card">
                <DataTable responsiveLayout="scroll">
                    <Column field="code" header="Lýsing"></Column>
                    <Column field="name" header="Dagtal"></Column>
                    <Column field="category" header="Klukka byrjar"></Column>
                    <Column field="quantity" header="Túlkur"></Column>
                </DataTable>
            </div>
    </div>
  );
}