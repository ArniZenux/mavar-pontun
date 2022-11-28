import { useState } from 'react'; 

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

export function LoginForm() {
  const [checked1, setChecked1] = useState(false);

  return (
    <div className="flex justify-content-center">
      <div className="surface-card p-4 shadow-3 border-round w-full lg:w-4">
        <div className="text-center mb-5">
          <div className="text-900 text-3xl font-medium mb-3">Mávar - pöntunarsíða</div>
          <span className="text-600 font-medium line-height-3">Innskráning</span>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">Notandi</label>
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

          <Button label="Skrá inn" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
}