import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';

export function RegisterForm() {
  const [checked1, setChecked1] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const validate = (data) => {
    let errors = {};

    if (!data.name) {
        errors.name = 'Vantar nafn.';
    }

    if (!data.email) {
        errors.email = 'Vantar tölvupóstur is required.';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = 'ógildi tölvupóstur';
    }

    if (!data.password) {
        errors.password = 'Vantar lyklaorð.';
    }

    if (!data.accept) {
        errors.accept = 'Regla sem þú þarft að samþykkja.';
    }

    return errors;
  };

  const onSubmit = (data, form) => {
    setFormData(data);
    setShowMessage(true);

    form.restart();
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    //return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
  };
  
  const passwordHeader = <h6>Veldu lyklaorð</h6>;
  const passwordFooter = (
      <React.Fragment>
          <Divider />
          <p className="mt-2">Mæla með</p>
          <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
          </ul>
      </React.Fragment>
  );

  return (
    <div className="flex justify-content-center">
      <div className="surface-card p-4 shadow-3 border-round w-full lg:w-4">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Mávar - pöntunarsíða</div>
          <span className="text-600 font-medium line-height-3">Nýskráning</span>
        </div>

        <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="p-fluid">
              <Field name="name" render={({ input, meta }) => (
                  <div className="field md:mb-5">
                      <span className="p-float-label">
                          <InputText id="name" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                          <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Nafn*</label>
                      </span>
                      {getFormErrorMessage(meta)}
                  </div>
              )} />
              <Field name="email" render={({ input, meta }) => (
                <div className="field md:mb-5">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Tölvupóstur*</label>
                  </span>
                  {getFormErrorMessage(meta)}
                </div>
            )} />
              <Field name="password" render={({ input, meta }) => (
                <div className="field md:mb-4">
                  <span className="p-float-label">
                    <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Lyklaorð*</label>
                  </span>
                  {getFormErrorMessage(meta)}
                </div>
            )} />
            <Field name="accept" type="checkbox" render={({ input, meta }) => (
              <div className="field-checkbox  md:mb-3">
                <Checkbox inputId="accept" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                  <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Ég samþykkt skilyrði SHH*</label>
              </div>
            )} />
          </form>
        )} />
        
          

          <Button label="Nýskrá" icon="pi pi-user-plus" className="w-full" />
        </div>
      </div>
  );
}

/*
<div>

          <label htmlFor="email" className="block text-900 font-medium mb-2">Nafn</label>
          <InputText type="text" className="w-full mb-3" />

          <label htmlFor="password" className="block text-900 font-medium mb-2">Lyklaorð</label>
          <InputText type="password" className="w-full mb-3" />

          <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">
                  <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                  <label htmlFor="rememberme">Mundu mér</label>
              </div>
              <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Gleymt lyklaorð?</a>
          </div>
          */