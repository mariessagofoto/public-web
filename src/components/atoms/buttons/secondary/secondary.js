import "./secondary.scss"

const SecondaryButton = ({onClick, text, className, small}) => {
    return (
        <button 
            className={["secondary-button", className, small ? "secondary-button__small" : null].join(" ")} 
            onClick={onClick}>
            {text}
        </button>
    )
}

export default SecondaryButton