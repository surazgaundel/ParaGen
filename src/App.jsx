import { useEffect, useState } from 'react'
import './App.css'
import text from '../data'


function App() {
  const [data,setData]=useState([]);
  const [count,setCount]=useState(0)


  const submitHandler =(e)=>{
    e.preventDefault();
    
    let amount=parseInt(count);
    if(count<=0){
      amount=1
    }
    if(count>10){
      amount=10
  }
  setData(text.slice(0,amount));
  }
  return (
    <>
    <h1>Generate paragraph</h1>
        <form onSubmit={submitHandler}>
        <label htmlFor='paragraph'> Paragraph:
        <input type='number' id='paragraph' min='1' max='10' value={count}
         onChange={(e)=>{setCount(e.target.value)}}/>
        </label>
        <button>Generate</button>
        </form>
        <article>
            {data.map((item,index)=>{
              return (<p key={index}>{item}</p>);
            })}
        </article>
    </>
  )
}
export default App;
