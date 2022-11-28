import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export function Index() {
  return (
    <div className="surface-ground px-0 py-3 md:px-1 lg:px-8">
      <div className="text-900 font-medium text-900 text-xl mb-3">Velkominn í Pöntunarsíða - Endalega að panta túlk</div>
        <div className="flex justify-content-center">
          <div className="card w-auto">
                <DataTable responsiveLayout="scroll">
                    <Column field="code" header="Lýsing"></Column>
                    <Column field="name" header="Dagtal"></Column>
                    <Column field="category" header="Klukka"></Column>
                    <Column field="quantity" header="Túlkur"></Column>
                </DataTable>
            </div>
          </div>
        </div>
      
  );
}
