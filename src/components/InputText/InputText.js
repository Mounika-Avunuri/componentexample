import Input from "../Input/Input";
import Output from "../Output/Output";
import {useState} from 'react'

const InputText = () =>{
    const[textVal,setTextVal] = useState('ABC');
const inputChangeHandler
    return(
        <>
    <Input value={textVal} onInputChange={(event)=>{const textvalue=event.target.value
    setTextVal(textvalue)}}/>
    <Output value={textVal}/>
    </>
    );
};
export default InputText;