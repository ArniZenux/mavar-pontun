import { useState } from 'react'; 

import { Calendar } from "primereact/calendar";
import { Button } from 'primereact/button';

export function CheckForm() {
  let [day, setDay] = useState(new Date());
  let [start, setStart] = useState("00:00");
  let [last, setLast] = useState("00:00");
  
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
        <Button label="Athuga" icon="pi pi-file" className="w-auto" />
       </div>
      </div>
    </div>
  );
}
  