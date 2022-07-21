import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement,reset,incrementByAmount} from '../counter/counterSlice'

function Counter() {
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();

    const [incrementAmount,setIncrementAmount]=useState(0)
    const addValue=Number(incrementAmount)||0;

    const ResetAll=()=>{
      setIncrementAmount(0);
      dispatch(reset());
    }
  return (
    <div>
        <h2>
     Counter :
        </h2>
<h1>{count}</h1>
<span>
    <button onClick={()=>{dispatch(increment())}}>+</button>
<button onClick={()=>{dispatch(decrement())}}>-</button>
<button onClick={()=>{dispatch(ResetAll())}}>Reset</button>
<input type='text' value={incrementAmount} onChange={(e)=>{setIncrementAmount(e.target.value)}}/>
<button onClick={()=>dispatch(incrementByAmount(addValue))}>Add Amount</button>
</span>
    </div>
  )
}

export default Counter