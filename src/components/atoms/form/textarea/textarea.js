import "./textarea.scss"

const Textarea = ({onChange, value, placeholder, className}) => {
    return (
        <textarea
            className={["textarea", className].join(" ")}
            value={value} 
            onChange={event => onChange(event.target.value)} 
            placeholder={placeholder}
        />
    )
}

export default Textarea