import { useState,useEffect } from "react";
import orderShipping from "../../Details/shipping.json"
import orderDetails from "../../Details/details.json"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ForestIcon from '@mui/icons-material/Forest';
import CoffeeIcon from '@mui/icons-material/Coffee';
import "./index.css"
const ShippingOrder=(props)=> {

  const [total, setTotal] = useState(0);
  
   
    useEffect(() => {
        function roundToTwo(num) {
          return +(Math.round(num + "e+2") + "e-2");
        }
        const roundTotal = roundToTwo(
          orderDetails.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )
        );
        setTotal(roundTotal);
      }, []);
  
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
  return (
    <div className="bg-container">
        
        {orderShipping.map((orderShipping,i)=>(
            <div key={i} className='order-card-container'>
                <div>
                    <p >Supplier</p>
                    <h1 className='order-heading'>{orderShipping.supplier}</h1>
                </div>
                
                <div>
                    <p >Shipping Date</p>
                    <h1 className='order-heading'>{new Date().toLocaleString('en-US', dateOptions)}</h1>
                </div>
                <div>
                    <p>Total</p>
                    <h1 className='order-heading'>{total}</h1>
                </div>
                
                <div> 
                    <p className="para" >category</p> 
                    <FastfoodIcon fontSize="small"/>
                    <AcUnitIcon  fontSize="small" />
                    <RiceBowlIcon  fontSize="small"/>
                    <br/>
                    <EmojiNatureIcon  fontSize="small"/>
                    <ForestIcon  fontSize="small"/>
                    <CoffeeIcon  fontSize="small"/>

                </div>
              
                <div>
                    <p>Department</p>
                    <h1 className='order-heading'>{orderShipping.department}</h1>
                </div>
                <div>
                    <p >Status</p>
                    <h1 className='order-heading'>{onApproveOrder}</h1>
                </div>
                
            </div>
        ))
        }
    </div>
  )
}



export default ShippingOrder