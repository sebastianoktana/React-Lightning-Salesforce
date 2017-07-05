import React from 'react';


const changeRisk = props => (
 
    <div className="slds-form-element">

    <label className="slds-form-element__label">Risk<br/>
    
    <input type="range"
        defaultValue="1"
        min="0"
        max="10"
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value) {
            props.onChange(e.target.value);
          }
        }}
       />
       </label>
     </div>
  );



 
export default changeRisk;

