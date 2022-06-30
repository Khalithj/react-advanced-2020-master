import React,{useState} from 'react';


const ErrorExample = () => {
  let [tit,setTit]=useState("Random tit");
  const chngetitle =()=>{
    if(tit ==='Random tit' || tit==='The new world Angel work'){
       setTit("The new world Dev work");
           
    }
   else if(tit === 'The new world Dev work'){
    setTit("The new world Angel work");
   }
       
  }
  return( 
    <>
  
  <h1>{tit}</h1>
  <button onClick={chngetitle}>hit me for change</button>
  </>
  )
};

export default ErrorExample;
