import { NavLink } from 'react-router-dom';
import React, {useContext, useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import mavarlogo2 from '../../utils/Images/brid2.jpg';
import { UserContext } from '../../context/UserContext';

export const Navigation = () => {

const [ userContext, setUserContext] = useContext(UserContext);
  
const btnRef1 = useRef(null);
const btnRef2 = useRef(null);

const logoutHandler = () => {
  //localStorage.removeItem('user');
  setUserContext(oldValues => {
    return { ...oldValues, token : null }
  });
}

console.log('header', userContext);

//eslint-disable
return (
  <div className="surface-overlay py-3 px-6 shadow-1 flex align-items-center justify-content-between relative lg:static" style={{ minHeight: '80px' }}>
    <img src={mavarlogo2} alt="Mavarlogo" height={40} className="border-round-md mr-1 lg:mr-6" />
    <StyleClass nodeRef={btnRef1} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
      <div ref={btnRef1} className="cursor-pointer block lg:hidden text-700">
        <i className="pi pi-bars text-4xl"></i>
        <Ripple />
        </div>
    </StyleClass>
    <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
      <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
        <li>
          <NavLink className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" style={{ textDecoration: 'none' }} to={`/`}>
            <i className="pi pi-home mr-2"></i>
            <span>Heima</span> 
            <Ripple />
          </NavLink> 
        </li>
        <li className="lg:relative">
          <StyleClass nodeRef={btnRef2} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
            <div ref={btnRef2} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
              <i className="pi pi-users mr-2"></i>
              <span>Pöntun</span> 
              <i className="pi pi-angle-down ml-auto lg:ml-0"></i>
              <Ripple />
            </div> 
          </StyleClass>   
          <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
            <li>
              <NavLink className="p-ripple flex px-4 p-3 lg:px-3 lg:py-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" style={{ textDecoration: 'none' }} to={`/order`}>
                <i className="pi pi-user-plus mr-2"></i>
                <span className="font-medium">Panta túlk</span>
                <Ripple />
              </NavLink>
              <NavLink className="p-ripple flex px-4 p-3 lg:px-3 lg:py-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 w-full" style={{ textDecoration: 'none' }} to={`/myorder`}>
                <i className="pi pi-list mr-2"></i>
                <span className="font-medium">Mínir pantanir</span>
                <Ripple />
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" style={{ textDecoration: 'none' }} to={`/check`}>
            <i className="pi pi-search mr-2"></i>
            <span>Athuga laus túlk</span>
            <Ripple />
          </NavLink>
        </li>
      </ul>
      <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
        <li>
          <div className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" to={`/check`}>
            <i className="pi pi-user mr-2"></i>
            <span className="font-medium">Árni Ingi Jóhannesson (notandi)</span>
            <Ripple />
          </div>
        </li>
        <li>
          <NavLink className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full"  style={{ textDecoration: 'none' }} onClick={logoutHandler} to={``}>
            <i className="pi mr-2"></i>
            <span className="font-medium">Útskrá</span>
            <Ripple />
          </NavLink>
      </li>
      </ul>
    </div>
  </div>
)
}