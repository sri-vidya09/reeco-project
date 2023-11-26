import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import "./index.css"

function NavBar() {
  return (
    <nav className='nav-bg-container'>
      <div className='nav-items'>
      <div className='nav-item-start'>
          <h1 className='reeco-heading'>Reeco</h1>
          <p className='nav-elements'>Store</p>
          <p className='nav-elements'>Orders</p>
          <p className='nav-elements'>Analytics</p>
      </div>
        <div className='nav-item-end'>
            <ShoppingCartOutlinedIcon className='icon-nav'/>
            <p className='nav-elements'>Hello,Vidya</p>
            <ArrowDropDownSharpIcon className='icon-nav'/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar