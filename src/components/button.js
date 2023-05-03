const Button = function({type,className,children,onClick}){
    return(
        <button type="button" className={className} onClick={onClick}>{children}</button>
    )
}

export default Button;