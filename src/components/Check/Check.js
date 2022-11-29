import { useState } from 'react'; 

import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export function CheckForm() {
  let [day, setDay] = useState(new Date());
  let [start, setStart] = useState("00:00");
  let [last, setLast] = useState("00:00");

  const [visible2, setVisible2] = useState(false);
    
  return (
    <div className="flex justify-content-center">
     <div className="surface-ground px-0 py-3 md:px-1 lg:px-8">
      <div className="text-700 font-medium text-900 text-xl mb-3">Athuga túlk sé laus</div>
        <div className="surface-card p-3 shadow-2 border-round p-fluid" >
          <div className="grid formgrid p-fluid">
            <div className="field mb-4 col-12 md:col-12">
              <label htmlFor="invoice_date" className="font-medium text-900">Dagtal *</label>
              <Calendar 
                  value={day}  
                  onChange={(e) => setDay(e.value)}
                  dateFormat="dd/mm/yy" 
                  showIcon 
                />
              </div>
              <div className="field mb-4 col-12 md:col-12">
                <label htmlFor="time24">Klukka byrja? *</label>
                <Calendar 
                  id="time24" 
                  value={start} 
                  onChange={(e) => setStart(e.value)} 
                  timeOnly 
                  hourFormat="24" 
                  />
              </div>
              <div className="field mb-4 col-12 md:col-12">
                <label htmlFor="time12">Klukka endir? (valin)</label>
                <Calendar 
                  id="time24" 
                  value={last} 
                  onChange={(e) => setLast(e.value)} 
                  timeOnly 
                  hourFormat="24" 
              />
              </div>
          </div>
        <Button label="Athuga" icon="pi pi-file" className='w-auto' onClick={() => setVisible2(true)} />
          <Dialog visible={visible2} onHide={() => setVisible2(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} closable={false} showHeader={false} footer={<div className=" border-top-1 surface-border pt-3 flex">
            <Button icon="pi pi-times" onClick={() => setVisible2(false)} label="Hætta" className="p-button-outlined w-6 mr-2" />
            <Button icon="pi pi-check" onClick={() => setVisible2(false)} label="Panta túlk" className="w-6 ml-2" />
          </div >}>
            <div className="flex flex-column align-items-center my-4">
              <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style={{ width: '64px', height: '64px' }}>
                <i className="pi pi-check text-5xl"></i>
              </span>
                <div className="font-medium text-2xl text-900">Túlkur er laus !</div>
              </div>
          </Dialog>
       </div>
      </div>
    </div>
  );
}
  