import "./copyright.scss"

const Copyright = ({className}) => {
    return (
        <h3 className={["copyright", className].join(" ")}>Copyright {new Date().getFullYear()} Maries Sagofoto, all rights reserved</h3>
    )
}

export default Copyright