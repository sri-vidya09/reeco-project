import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./index.css"

function Buttons() {
  const [isApproved, setIsApproved] = useState(false);
  const [isMissing, setIsMissing] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [message, setMessage] = useState(null);

  const onApprove = () => {
    setIsApproved(true);
    setIsMissing(false);
    setIsUrgent(false);
    setMessage('Approved');
  };

  const onMissing = () => {
    setIsMissing(true);
    setIsUrgent(false);
    setIsApproved(false);
    setMessage(null);
  };

  const onUrgent = () => {
    setIsUrgent(true);
    setIsMissing(false);
    setIsApproved(false);
    setMessage(null);
  };

  return (
    <div className='button-elements'>
         <div>
        {isApproved &&" "&& <p className='decision-item' style={{backgroundColor:"#47b725"}}>Approved</p> }

        {isMissing && !isUrgent && <p className='decision-item'  style={{backgroundColor:"#fa4002"}}>Missing</p>}
        {isUrgent && <p className='decision-item'  style={{backgroundColor:"#e80a0a"}}>Urgent-Missing</p>}
      </div>
      <div className='button-icons '> 
        <p onClick={onApprove} style={{ color: "#47b725" }}><DoneIcon /></p>
      <Popup trigger={<p className='btn' style={{ color: "#e80a0a" }}><CloseIcon /></p>} position="center" modal>
        {close => (
          <form>
            <div className='header'>
            <button className="into-btn" onClick={() => close()}>X</button>
              <h1 className='missing-heading'>Missing Product?</h1>
            </div>
            <p>Is Chicken Breast ...urgent?</p>
            <button onClick={() => { onUrgent(); close(); }} className='yes-button'>yes</button>
            <button onClick={() => { onMissing(); close(); }}>no</button>
          </form>
        )}
      </Popup>
      </div>
     
  
    </div>
  );
}

export default Buttons;
