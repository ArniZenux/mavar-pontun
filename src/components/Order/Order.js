import { useState } from 'react'; 

import { Form, Field } from 'react-final-form';
import { Calendar } from "primereact/calendar";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

export function OrderForm() {
  let [day, setDay] = useState(new Date());
  let [start, setStart] = useState("00:00");
  let [last, setLast] = useState("00:00");
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = 'Vantar nafn þitt.';
    }

    if (!data.place) {
        errors.place = 'Hvert ertu að fara í ?';
    }
    if (!data.lysing) {
      errors.lysing = 'Vantar lýsing á verkefni sem þú ert fara í ';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'Invalid email address. E.g. example@email.com';
    }

    if (!data.password) {
        errors.password = 'Password is required.';
    }

    if (!data.accept) {
        errors.accept = 'You need to agree to the terms and conditions.';
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    //setShowMessage(true);

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
      return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
  };

  return (
    <div className="flex-wrap justify-content-center" style={{ margin: '0 auto' }}>
     <div className="surface-ground px-0 py-3 md:px-1 lg:px-1">
      <div className="text-900 font-medium text-900 text-xl mb-3">Pöntunarbeiðni</div>
        <div className="surface-card p-3 shadow-2 border-round p-fluid">
          <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="p-fluid">
              <Field name="name" render={({ input, meta }) => (
                <div className="field">
                    <span className="p-float-label">
                        <InputText id="name" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                        <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Nafn*</label>
                    </span>
                    {getFormErrorMessage(meta)}
                </div>
               )} />
                <Field name="place" render={({ input, meta }) => (
                <div className="field">
                    <span className="p-float-label">
                        <InputText id="place" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                        <label htmlFor="place" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Hvar er staður*</label>
                    </span>
                    {getFormErrorMessage(meta)}
                </div>
               )} />
                <Field name="lysing" render={({ input, meta }) => (
                <div className="field">
                    <span className="p-float-label">
                        <InputTextarea id="lysing" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                        <label htmlFor="lysing" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Lýsing á verkefni*</label>
                    </span>
                    {getFormErrorMessage(meta)}
                </div>
               )} />
               <Button type="submit" label="Submit" className="mt-2" />
            </form>
          )} />
        </div>
      </div>
    </div>
  );
}

/*

   
         <form onSubmit={handleSubmit} className="p-fluid">
      
          <div className="grid formgrid">
            <div className="field mb-4 col-12 md:col-6">
            
              <div className="field mb-4 col-12 md:col-12">
                <label htmlFor="nafn" className="font-medium text-900">Nafn þitt *</label>
                <InputText id="nafn" type="text" />
              </div>
           
              <div className="field mb-4 col-12 md:col-12">
                <label htmlFor="stadur" className="font-medium text-900">Hvar er staður *</label>
                <InputText id="stadur" type="text" />
              </div>

              <div className="field mb-3 col-12 md:col-12">
                <label htmlFor="notes" className="font-medium text-900">Lýsing *</label>
                <InputTextarea id="notes" autoResize rows={5} />
              </div>
            
            </div>
            
            <div className="field mb-4 col-12 md:col-6">
            
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

              <div className="field mb-3 col-12 md:col-12">
                <label htmlFor="time12">Klukka endir? (valin)</label>
                  <Calendar 
                    id="time12" 
                    value={last} 
                    onChange={(e) => setLast(e.value)} 
                    timeOnly 
                    hourFormat="24" 
                  />
              </div>
            
            </div>
          </div>
             
          <Button label="Senda beiðni" icon="pi pi-send" className="w-auto" />

          */