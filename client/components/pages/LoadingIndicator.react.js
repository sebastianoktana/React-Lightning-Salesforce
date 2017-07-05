import React, { PropTypes } from 'react';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'https://localhost:8080/' : '../';
const inVF = location.href.indexOf('apex') > 0 ? true : false;

let LoadingIndicator = () => {

  let position = {position: 'absolute',left: '50%',top: '50%',transform: 'translate(-50%, -50%)'};
   return (
       <div>
         <div style ={position} className="slds-spinner--medium">
          { (inVF) ? ( <img src="https://localhost:8080/css/assets/images/spinners/slds_spinner.gif" alt="Loading..." />) : (<img src="../css/assets/images/spinners/slds_spinner.gif" alt="Loading..."/>)}
         </div>
       </div>
    );
 };

export default LoadingIndicator;