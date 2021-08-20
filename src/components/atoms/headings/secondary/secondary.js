import "./secondary.scss"

const Secondary = ({text, className, large, light}) => {
    return (
        <h2 className={[
                "secondary-heading", 
                className, 
                large ? "secondary-heading__large" : null,
                light ? "secondary-heading__light" : null,
            ].join(" ")}
        >{text}</h2>
    )
}

export default Secondary