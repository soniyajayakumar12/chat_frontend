import { forwardRef } from "react";

const Input = forwardRef(function({type,value,className,onChange},ref){
    return(
        <input type={type} className={className} ref={ref} value={value} onChange={onChange}/>
    )
})

export default Input;