

function Button(props) {
    return(
        <button onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
    )
}

export default Button


