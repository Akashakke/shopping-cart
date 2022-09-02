import {useState} from "react";

function Counter() {
    const [count,setCount] = useState(0);
    let inc = () => {
        setCount(count +1)
    }
    let dec = () => {
        setCount(count -1)
    }
    return<>
    <button onClick={dec}>-</button>
    <h1>{count} </h1>
    <button onClick={inc}>+</button> </>
}
export default Counter;