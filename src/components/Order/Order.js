import { useState, useRef } from 'react'; 
//import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { Calendar } from "primereact/calendar";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

const apiUrl = process.env.REACT_APP_API_URL;

export function OrderForm() {
  //let navigate = useNavigate(); 
  const toast = useRef(null);
  let [day, setDay] = useState(new Date());
  let [start_time, setStartTime] = useState("00:00");
  let [last_time, setLastTime] = useState("00:00");

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Það tókst', detail:'Pöntun hafa sent', life: 3000});
  }

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = 'Vantar nafn';
    }

    if (!data.place) {
        errors.place = 'Vantar staðsetning';
    }
    
    if (!data.desc) {
      errors.desc = 'Vantar lýsing';
    }
    
    if (!data.day) {
        errors.day = 'Vantar dagtal';
    }

    if (!data.start_time) {
        errors.start_time = 'Vantar tima';
    }
    
    if (!data.last_time) {
      errors.last_time = 'Vantar tima';
    }

    return errors;
  };
 
  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  const onSubmit = async (data, form) => {
    //let path = `/`; 

    let zdata = [];
    const stada = 2; 
    const utskyring = 'Í vinnslu';
    const tulkur = 'Í vinnslu'; 
    
    zdata.push(data.name);
    zdata.push(data.place);
    zdata.push(data.desc);
    zdata.push(data.day.toLocaleDateString('IS'));

    let _startTimeHour = addZero(data.start_time.getHours());
    let _startTimeMin = addZero(data.start_time.getMinutes());
    let _start_time = `${_startTimeHour}:${_startTimeMin}`;
    zdata.push(_start_time);

    let _lastTimeHour = addZero(data.last_time.getHours());
    let _lastTimeMin = addZero(data.last_time.getMinutes());
    let _last_time = `${_lastTimeHour}:${_lastTimeMin}`;
    
    //console.log(_last_time);

    zdata.push(_last_time);

    zdata.push(stada);
    zdata.push(utskyring);
    zdata.push(tulkur);

    //console.log(zdata); 
    let success = true; 

    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(zdata)
    };
    
    let url = apiUrl + '/beidni/sendaBeidni';

    success = await fetch(url, requestOptions);
      
    if(success){
      console.log('');
      //navigate(path); 
    }
    else {
      console.error("It don't success");
    }

    form.restart();
    zdata = [];
  };

  /*let start_time_onchange = (e) => {
    let hour = new Date(e).getHours();
    let min = new Date(e).getMinutes();
    let start_time_replace = `${hour}:${min}`;
    //console.log(start_time_replace);
    setStartTime(start_time_replace); 
  }*/

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
  };

  return (
    <div className="surface-card shadow-2 border-round p-4">
    <div className="flex mb-5">
      <span className="text-xl text-900 font-medium">Pöntunarbeiðni</span>
    </div>
    <div className="card">

    
            <Form onSubmit={onSubmit} 
              initialValues={{ name: '', place: '', desc: '', day: '', start_time: '', last_time: '' }} 
              validate={validate} 
              render={({ handleSubmit }) => (

              <form onSubmit={handleSubmit} className="p-fluid">
                <div className="grid formgrid">
                  <div className="field mb-4 col-12 md:col-6">

                    <Field name="name" render={({ input, meta }) => (
                      <div className="field mt-4 col-12 md:col-12">
                        <span className="p-float-label">
                          <InputText id="name" {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                          <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Nafn þitt*</label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )} />
                    
                    <Field name="place" render={({ input, meta }) => (
                      <div className="field mt-5 col-12 md:col-12">
                        <span className="p-float-label">
                          <InputText id="place" {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                          <label htmlFor="place" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Hvar er staður*</label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )} />
                    
                    <Field name="desc" render={({ input, meta }) => (
                      <div className="field mt-5 col-12 md:col-12">
                        <span className="p-float-label">
                          <InputTextarea id="desc" autoResize rows={3} {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                          <label htmlFor="desc" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Lýsing á verkefni*</label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )} />
                  </div>

                  <div className="field mb-4 col-12 md:col-6">
                    <Field name="day" render={({ input, meta }) => (
                      <div className="field md:mt-4 col-12 md:col-12">
                        <span className="p-float-label">
                          <Calendar 
                            id="day"
                            value={day}  
                            onChange={(e) => setDay(e.value)}
                            dateFormat="dd/mm/yy" 
                            mask="99/99/9999"
                            showIcon 
                            {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                          />
                          <label htmlFor="dagtal" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Dagtal*</label>
                        </span>                  
                      </div>
                    )} />

                    <Field name="start_time" render={({ input, meta }) => (
                      <div className="field mt-5 col-12 md:col-12">
                        <span className="p-float-label">
                          <Calendar 
                            id="start_time" 
                            value={start_time} 
                            onChange={(e) => setStartTime(e.value)} 
                            timeOnly 
                            hourFormat="24" 
                            {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                          />
                        <label htmlFor="start_time" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Klukka byrja*</label>
                        </span>
                      </div>
                    )} />
                  
                    <Field name="last_time" render={({ input, meta }) => (
                      <div className="field mt-5 col-12 md:col-12">
                        <span className="p-float-label">
                          <Calendar 
                            id="last_time" 
                            value={last_time} 
                            onChange={(e) => setLastTime(e.value)} 
                            timeOnly 
                            hourFormat="24" 
                            {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                          />
                          <label htmlFor="last_time" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Klukka endir*</label>
                        </span>
                      </div>
                    )} />

                  </div>
                </div>
              <Toast ref={toast} />
              <Button type="submit" label="Senda beiðni" icon="pi pi-send" className="w-auto ml-2" onClick={showSuccess} />
              </form>
            )} />
          </div>
      </div>
  );
}

/*
<div className="surface-card p-3 shadow-2 border-round p-fluid">
  <div className="flex-wrap justify-content-center" style={{ margin: '0 auto' }}>
    <div className="surface-ground px-0 py-3 md:px-1 lg:px-1">
      <div className="text-900 font-medium text-900 text-xl mb-3">Pöntunarbeiðni</div>
    </div>
  </div>
</div>
*/