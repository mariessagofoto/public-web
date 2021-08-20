import "./primary.scss"

const Primary = ({text, className}) => {
    return (
        <h1 className={["primary-heading", className].join(" ")}>{text}</h1>
    )
}

export default Primary