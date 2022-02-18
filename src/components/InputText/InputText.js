import Input from "../Input/Input";
import Output from "../Output/Output";
import {useState} from 'react';
//import './InputText.css';
import styles from './InputText.module.css'

const InputText = () =>{
    const[textVal,setTextVal] = useState('ABC');
const inputChangeHandler = (event)=>{const textvalue=event.target.value
    setTextVal(textvalue)
}

const msgStyleObj = {
    color:'yellow',
    fontWeight:'bold',
    paddingTop:'20px'
}

const name = 'abcd';
const message = (<div style={{color:'green',fontWeight:'bold'}}>Hello {name}</div>);
const myname = 'Mounika';
const fullname = (<div style={msgStyleObj}> Aileni {myname}</div>)
    return(
        <>
        <div className={styles.container}>
        {message}
        {fullname}
    <Input value={textVal} onInputChange={inputChangeHandler}/>
    <Output value={textVal}/>
    </div>
    </>
    );
};
export default InputText;