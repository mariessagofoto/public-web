import "./paragraph.scss"

const Paragraph = ({text, className}) => {
    return (
        <p className={["paragraph", className].join(" ")}>{text}</p>
    )
}

export default Paragraph