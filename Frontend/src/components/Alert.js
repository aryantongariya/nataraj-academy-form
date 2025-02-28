import React from "react";

export const Alert = (props) => {
  const capitalize = (word)=>{
    if(word==="danger"){
      word = "error"
    }

    // const lower = word.toLowerCase()
    // return lower.chart(0).toUpperCase() + lower.slice(1)
  }
  return (
    <div style={{height: '50px', padding:'1rem'}}>
    { props.alert &&  
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong> {capitalize(props.alert.type)}</strong>:  {props.alert.msg}
 </div>}
     </div>
  );
};

export default Alert
