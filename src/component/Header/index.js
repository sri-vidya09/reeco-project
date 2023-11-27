import React from 'react'
import "./index.css"

const Header=() =>{
  
    return (
        <div className="header-card-container">
            <p className='card-alignment'>
              Orders &gt;&nbsp;
              <span className='span-heading' >Order 32457ABC</span>
            </p>
            <div className="card-order-alignment">
              <p className="orders-heading">Order 32457ABC</p>
              <div className="button-element">
                <button className='button'>Back</button> 
                <button className='button-approve' >Approve</button> 
              </div>
            </div>
          </div>
        );
    
}

export default Header