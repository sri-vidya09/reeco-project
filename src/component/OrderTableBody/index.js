import React, { useState } from 'react';
import details from '../../Details/details.json';

import OrderTable from '../OrderTable';
import Buttons from '../Buttons';
import Header from '../Header';
import ShippingOrder from '../ShippingOrder';


import './index.css';


function OrderTableBody() {
  const [searchTerm, setSearchTerm] = useState('');
  const [displayedItems, setDisplayedItems] = useState(details);


  const calculateTotal = (item) => {
    return item.price * item.quantity;
  };

  const handleSearch = () => {
    const filteredItems = details.filter(item =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedItems(filteredItems);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' ) {
      handleSearch();
    }
  };
 
  return (
    <>
    <Header />
    <ShippingOrder/>
    <div className='bg-order-container'>
      <div className="search-item">
        
           <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          onKeyDown={handleKeyDown}
          className='search-bar'
  
        />
       
        <button   className='button-approve'>Add Item</button>
      </div>

      <OrderTable />

      <div className="bg-order">
        {displayedItems.map((item, i) => (
          <div key={i} className="body-items">
            <p className="items">
              <img
                src="https://res.cloudinary.com/dtuk7apnu/image/upload/v1700906519/Apple_Green_Smith_maak2b.png"
                alt="img"
                className="image-icon"
              />
              {item.product_name}
            </p>
            <p className="items " >{item.brand}</p>
            <p className="items para">{item.price}</p>
            <p className="items para" >{item.quantity}</p>
            <p className="items para">{calculateTotal(item)}</p>
            <p className="items ">
              {item.status}
              <Buttons/>
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
}

export default OrderTableBody;
