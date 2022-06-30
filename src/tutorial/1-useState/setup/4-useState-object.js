import React, { useState } from 'react';
import {data} from  "../../../data"



const UseStateObject = () => {
  const [per,setPer]= useState(data);
  const [obj,setObject] = useState({ name:"Cr7",
  age :40,
  message :"The GOAT!"})
 const  hitme =()=>{
  setObject({...obj,message :"the him me is working"})
alert("the Hit me");
  }
  const hello=(id)=>{
  alert(id);
  const newup=per.map((i)=>{
    if(i.id===id){
      return {...i,name:'it cahnge'}
    }
    return i;
  })
   
    setPer(newup);
  }
  return (<>
  <h1>The Go</h1>
  <h3>{obj.name}</h3>
  <h3>{obj.age}</h3>
  <h3>{obj.message}</h3>
  <button onClick={()=>hitme()} className="btn">Hite Me</button>
  {per.map(i=>{
    return(
      <div key={i.id}>
    <h3  >{i.name}</h3>
    <button  className='btn' onClick={()=>hello(i.id)}>{i.name}</button>
      
    </div>
    )
  })}
  </>
  );
};

export default UseStateObject;
