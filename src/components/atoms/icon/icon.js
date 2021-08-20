const Icon = ({icon, className}) => {
    return (
        <svg className={className}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/assets/icons.svg#${icon}`}></use>
        </svg>
    );
}

export default Icon