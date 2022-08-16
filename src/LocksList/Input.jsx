import { useState } from "react"

const Input = ({name,id})=>{
    const [input,setInput] = useState();
    const changeInput = (e)=>{
        const inputVal = e.target.value;
        setInput(inputVal);
        changeInput(inputVal,name,id);
    }
    return <input type="text" value={input} onChange={changeInput}/>

}

export default Input;