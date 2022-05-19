import React,{useState} from "react";
import styles from '../components/style.module.css'


const Counter=()=>{
    const [count,setCount]= useState(0);
    return (
        <div>
            <h1 className={count % 2===0 ? styles.greeCol : styles.reCol}>Counter App :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(count*2)}>Double</button>
        </div>
    )
}
export {Counter}
// footer