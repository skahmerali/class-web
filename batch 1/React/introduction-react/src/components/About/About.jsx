import React, { useState } from 'react';
// import { ReactDOM } from 'react';

export default function About(props) {
    var [value , setValue]=useState(0)
    
    // function abc(){

    // }
    
  return (<>
    <div>hello About {props.name}</div>
    <button onClick={()=>{setValue(value++)}}>click</button>
    <div>{value}</div>
  </>
  )
}
