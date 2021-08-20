import "./primary.scss"

const PrimaryButton = ({onClick, text, className, small}) => {
    return (
        <button 
            className={["primary-button", className, small ? "primary-button__small" : null].join(" ")} 
            onClick={onClick}>
            {text}
        </button>
    )
}

export default PrimaryButton