
 //  https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react

 //  https://www.primefaces.org/primereact-v8/datatable/crud/

/*



<div className="field">
              <label htmlFor="name">Name</label>
              <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
              {submitted && !product.name && <small className="p-error">Name is required.</small>}
          </div>
          <div className="field">
              <label htmlFor="description">Description</label>
              <InputTextarea id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
          </div>

          <div className="field">
              <label className="mb-3">Category</label>
              <div className="formgrid grid">
                  <div className="field-radiobutton col-6">
                      <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={product.category === 'Accessories'} />
                      <label htmlFor="category1">Accessories</label>
                  </div>
                  <div className="field-radiobutton col-6">
                      <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={product.category === 'Clothing'} />
                      <label htmlFor="category2">Clothing</label>
                  </div>
                  <div className="field-radiobutton col-6">
                      <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={product.category === 'Electronics'} />
                      <label htmlFor="category3">Electronics</label>
                  </div>
                  <div className="field-radiobutton col-6">
                      <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={product.category === 'Fitness'} />
                      <label htmlFor="category4">Fitness</label>
                  </div>
              </div>
          </div>
          <div className="formgrid grid">
              <div className="field col">
                  <label htmlFor="price">Price</label>
                  <InputNumber id="price" value={product.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
              </div>
              <div className="field col">
                  <label htmlFor="quantity">Quantity</label>
                  <InputNumber id="quantity" value={product.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
              </div>
          </div> 



return (
      <div className="surface-card shadow-2 border-round p-4">
         <div className="flex mb-5">
           <span className="text-xl text-900 font-medium">Beiðni um túlk</span>
         </div>
         <p key={i}>{ data.zday }</p>
       </div>
      )
   
 <ul className="list-none p-0 m-0">
         { APIData.forEach((data, i ) => {
                 <li key={i} className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(234,179,10,.1)', borderColor: 'rgba(234,179,10,.5)' }}>
                 <div>
                    <span className="text-yellow-700 font-bold ml-2">{data.zday}</span>
                 </div>
                 <div>
                    <span className="text-yellow-700 font-bold ml-2">Klukka byrjar: {data.start_time}</span>
                 </div>
                 <div>
                    <span className="text-yellow-700 font-bold ml-2">Klukka endar: {data.last_time}</span>
                 </div>
                 <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                     <span className="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Í biðstöðu</span>
                 </div>
             </li>
         })}
      </ul>
 <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(234,179,10,.1)', borderColor: 'rgba(234,179,10,.5)' }}>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Dagtal: 12/03/23</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka byrjar: 10:00</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka endar: engin skráð</span>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
                <span className="bg-yellow-400 text-yellow-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Í biðstöðu</span>
            </div>
        </li>
        
        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(33,197,94,.1)', borderColor: 'rgba(33,197,94,.5)' }}>              
            <div>
               <span className="text-yellow-700 font-bold ml-2">Dagtal: 12/03/23</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka byrjar: 10:00</span>
            </div>
            <div>
               <span className="text-yellow-700 font-bold ml-2">Klukka endar: engin skráð</span>
            </div>
          <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
             <span className="bg-green-400 text-green-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Túlkur kemur</span>
          </div>
        </li>

        <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between p-3 border-1 mb-3" style={{ borderRadius: '10px', backgroundColor: 'rgba(330,81,60,.1)', borderColor: 'rgba(330,81,60,.5)' }}>              
            <div>
               <span className="text-red-700 font-bold ml-2">Dagtal: 12/03/23</span>
            </div>
            <div>
               <span className="text-red-700 font-bold ml-2">Klukka byrjar: 10:00</span>
            </div>
            <div>
               <span className="text-red-700 font-bold ml-2">Klukka endar: engin skráð</span>
            </div>
            <div className="flex align-items-center justify-content-between md:justify-content-end mt-3 md:mt-0">
             <span className="bg-red-400 text-red-900 font-bold text-sm py-1 px-2" style={{ borderRadius: '10px' }}>Engin laus</span>
          </div>
        </li>
       </ul>

       */