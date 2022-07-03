
function Button({
    onClick,
    children,
    disabled
}){
    return (
        <button style={{
            padding:"1rem",
            border:0,
            borderWith:0,
            fontWeight:"Bold",
            backgroundColor:"tomato",
            color:"white"

          }}
           disabled={disabled} onClick={onClick} >
            {children}
        </button>
    )
}
export default Button;