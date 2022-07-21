import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from '../counter/counterSlice'

function Counter() {
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>
     Counter :
        </h2>
<h1>{count}</h1>
<span>
    <button onClick={()=>{dispatch(increment())}}>+</button>
<button onClick={()=>{dispatch(decrement())}}>-</button>
</span>
    </div>
  )
}

export default Counter