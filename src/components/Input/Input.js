const Input = (props) =>{
    return(
        <div>
            <input type="text" 
            value={props.value}
            onChange={props.onInputChange}/>
        </div>
    )
}
export default Input