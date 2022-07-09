import React, { useState } from 'react';


const UseState = () =>{
    const[inputValue,newChangeValue]=useState("Harsh");
   const onChange=(event)=>{
         const newval=event.target.value;
newChangeValue(newval)
   }
    return(
        <div>
                <input type="text" value={inputValue} placeholder='Type Something....' onChange={onChange}></input>
        </div>
    )
}
export default UseState;