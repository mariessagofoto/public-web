import "./text.scss"

const Textfield = ({onChange, value, placeholder, className}) => {
    return (
        <div className={["textfield", className].join(" ")}>
            <input 
                placeholder={placeholder}
                type="text" 
                onChange={event => onChange(event.target.value)} 
                value={value}
                className="textfield__input" 
            />
            <label className="textfield__placeholder">{placeholder}</label>
        </div>
    )
}

export default Textfield