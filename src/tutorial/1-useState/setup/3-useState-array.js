import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople]= React.useState(data);
  const remove_me=(id)=>{
    setPeople(people.filter( (p)=>p.id !== id))
  }
  return (
  <>
  <h1>hello</h1>
  {people.map((p)=>{
    return(
<div key={p.id} className='item'>
  {p.name}
  <button onClick={()=>remove_me(p.id)}>remove me</button>
</div>
    );
  })}
  <button className='btn' onClick={()=>setPeople([])}>clear All</button>
  </>
  );
};

export default UseStateArray;
