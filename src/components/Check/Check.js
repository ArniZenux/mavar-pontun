import { useState } from 'react'; 
//import { Form, Field } from 'react-final-form';
import { Calendar } from "primereact/calendar";
//import { Button } from 'primereact/button';
import { CheckDay } from './checkDay';
//import { Dialog } from 'primereact/dialog';
//import { classNames } from 'primereact/utils';
//import { UserContext } from '../../context/UserContext';

//const apiUrl = process.env.REACT_APP_API_URL;

export function CheckForm( ) {
  //const [ userContext ] = useContext(UserContext);
  let [day, setDay] = useState(new Date());
  console.log(day); 

  return (
    <div className="surface-card shadow-2 border-round p-4">
    <div className="flex mb-5">
      <span className="text-xl text-900 font-medium">Athuga hvort túlkur sé upptekinn á ákveðni tíma</span>
    </div>
      <div className="card p-fluid">
        <div className="grid formgrid">
            <div className="field mb-4 col-12 md:col-6">
                    <span className="p-float-label">
                        <Calendar 
                          id="day"
                          value={day}  
                          onChange={(e) => setDay(e.value)}
                          dateFormat="dd/mm/yy" 
                          mask="99/99/9999"
                          showIcon 
                        />
                        <label htmlFor="dagtal">Dagtal*</label>
                      </span>   
                </div>

                <div className="field mb-4 col-12 md:col-6">
                    <div className="field col-12 md:col-12">
                      <span className="p-float-label">
                        <div> <CheckDay id={day}/> </div>
                      </span>                  
                    </div>
                </div>
              </div>
          </div>
      </div> 
    );
}  

/*
/*let [busy, setBusy] = useState(null);
  let [start] = useState('');
  let [last] = useState('');
  const [visible2, setVisible2] = useState(false);*/
  //eslint-disable-next-line} 
  //const [setShowMessage] = useState(false);
  //const [setFormData] = useState({});

  /*
const validate = (data) => {
  let errors = {};

  if (!data.day) {
      errors.day = 'Vantar dagtal';
  }
  return errors;
};*/

/*const onSubmit = async (data, form) => {

  let zdata = [];
  //let success = true; 
  zdata.push(data.day.toLocaleDateString('IS'));

  const requestOptions = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userContext.token}`,
    },
    body: JSON.stringify(zdata)
  };
 
  let url = apiUrl + '/beidni/checkBeidni';
  const result = await (await (fetch(url, requestOptions))).json();
  console.log('result is: ', JSON.stringify(result, null, 4));

  setBusy(result);
    
  form.restart();
};
*/

/*const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    //return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
};
 <Form onSubmit={onSubmit} 
          initialValues={{ day: '' }} 
          validate={validate} 
          render={({ handleSubmit }) => (

          <form onSubmit={handleSubmit} className="p-fluid">
            <div className="grid formgrid">
              <div className="field mb-4 col-12 md:col-6">

                <Field name="day" render={({ input, meta }) => (
                  <div className="field mt-4 col-12 md:col-12">
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
                    {getFormErrorMessage(meta)}
                  </div>
                )} />
              </div>

              <div className="field mb-4 col-12 md:col-6">
                <Field name="day" render={({ input, meta }) => (
                  <div className="field md:mt-4 col-12 md:col-12">
                    <span className="p-float-label">
                      <div> <CheckDay id={day}/> </div>
                    </span>                  
                  </div>
                )} />

              </div>
            </div>
          </form>
          )} />

<div className="flex justify-content-center">
     <div className="surface-ground px-0 py-3 md:px-1 lg:px-8">
      <div className="text-700 font-medium text-900 text-xl mb-3">Athuga túlk sé laus</div>
        <div className="surface-card p-3 shadow-2 border-round"  style={{ width: '40vw' }} >
            

       </div>
     </div>
    </div>

        <Form onSubmit={onSubmit} initialValues={{ day: '' }} validate={validate} render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="p-fluid">
            <div className="grid formgrid p-fluid">
              <div className="field mb-2 col-12 md:col-12">
              <Field name="day" render={({ input, meta }) => (
                <div className="field md:mt-4">
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
                  {getFormErrorMessage(meta)}
                </div>
              )} />
              </div>
            </div>
          <Button label="Athuga" icon="pi pi-file" className='w-auto mt-2' onClick={() => setVisible2(true)} />
         </form>
        )} />

        <Dialog visible={visible2} onHide={() => setVisible2(false)} modal breakpoints={{ '960px': '75vw', '640px': '100vw' }} style={{ width: '40vw' }} closable={false} showHeader={false} footer={<div className=" border-top-1 surface-border pt-3 flex">
          <Button icon="pi pi-times" label="Hætta" className="p-button-outlined w-6 mr-2" onClick={exitProduct} />
          <Button icon="pi pi-check" label="Panta túlk" className="w-6 ml-2" onClick={orderProduct} />
        </div >}>
          <div className="flex flex-column align-items-center my-4">
            <span className="flex align-items-center justify-content-center bg-cyan-100 text-cyan-800 mr-3 border-circle mb-3" style={{ width: '64px', height: '64px' }}>
              <i className="pi pi-check text-5xl"></i>
           </span>
            <div className="font-medium text-2xl text-900">{start} og {last} </div>
          </div>
        </Dialog>

<div className="font-medium text-2xl text-900">Túlkur er laus !</div>
 
<div className="field mb-4 col-12 md:col-12">
              </div>
<Field name="start" render={({ input, meta }) => (
                <div className="field mt-1">
                  <span className="p-float-label">
                    <Calendar 
                      id="start" 
                      value={start} 
                      onChange={(e) => setStart(e.value)} 
                      mask="99:99"
                      timeOnly 
                      hourFormat="24" 
                      {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                    />
                  <label htmlFor="start" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Klukka byrja*</label>
                  </span>
                  {getFormErrorMessage(meta)}
                </div>
              )} />
               <Field name="last" render={({ input, meta }) => (
                <div className="field mt-1">
                  <span className="p-float-label">
                    <Calendar 
                      id="last" 
                      value={last} 
                      onChange={(e) => setLast(e.value)} 
                      mask=""
                      timeOnly 
                      hourFormat="24" 
                      {...input}  className={classNames({ 'p-invalid': isFormFieldValid(meta) })}
                    />
                    <label htmlFor="last" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Klukka endir*</label>
                  </span>
                  {getFormErrorMessage(meta)}
                </div>
              )} />



               /*await fetch(url, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setBusy(data)
    })
    .catch(error => { console.error(error) 
    })
  */

  //success = await fetch(url, requestOptions);

  /*if(success){
    console.log('');
    //navigate(path); 
  }
  else {
    console.error("It don't success");
  }*/

