//import { Menubar } from 'primereact/menubar';
import React, { useRef } from 'react';

import { Badge } from 'primereact/badge';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';

export const Navigation = () => {
  
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
    
  /*const navlist = [
    { label: 'Heima', icon: 'pi pi-fw pi-home', command: () => {
        window.location.href='/';
    }},
    { label: 'Pöntun', icon: 'pi pi-fw pi-file', command: () => {
        window.location.href='/order'; 
    }},
  ];*/

return(
  <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
    <img src="assets/images/blocks/logos/bastion-700.svg" alt="bastion-700" height={40} className="mr-0 lg:mr-6" />
    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
        <a ref={btnRef1} className="cursor-pointer block lg:hidden text-700">
            <i className="pi pi-bars text-4xl"></i>
            <Ripple />
        </a>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
          <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
          <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-home mr-2"></i>
                    <span>Heima</span>
                    <Ripple />
                </a>
            </li>
            <li className="lg:relative">
                <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                    <a ref={btnRef2} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                        <i className="pi pi-users mr-2"></i>
                        <span>Pöntun</span>
                        <i className="pi pi-angle-down ml-auto lg:ml-3"></i>
                        <Ripple />
                    </a>
                </StyleClass>
                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                            <i className="pi pi-user-plus mr-2"></i>
                            <span className="font-medium">Panta túlk</span>
                            <Ripple />
                        </a>
                    </li>
                    <li className="relative">
                        <StyleClass nodeRef={btnRef3} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <a ref={btnRef3} className="p-ripple flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full">
                                <i className="pi pi-calendar mr-2"></i>
                                <span className="font-medium">Mínar pantanir</span>
                                <Ripple />
                            </a>
                        </StyleClass>
                    </li>
                </ul>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi pi-calendar mr-2"></i>
                    <span>Athuga laus túlk</span>
                    <Ripple />
                </a>
            </li>
          </ul>
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                  <i className="pi pi-user mr-2"></i>
                  <span className="font-medium">Árni Ingi Jóhannesson (notandi)</span>
                  <Ripple />
                </a>
            </li>
            <li>
                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                    <i className="pi mr-2"></i>
                    <span className="font-medium">Útskrá</span>
                    <Ripple />
                </a>
            </li>
        </ul>
    </div>
</div>
 )
}