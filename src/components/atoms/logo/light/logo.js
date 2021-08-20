const LightLogo = ({className, onClick}) => {
    return (
        <img
            onClick={onClick} 
            src={`${process.env.PUBLIC_URL}/assets/maries-sagofoto-logo-white.png`} 
            className={className} 
        />
    )     
}

export default LightLogo