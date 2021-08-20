import "./splash-row.scss"

const SplashRow = ({image, imageQuote, imageQuoteCredit, children, splashLeft}) => {
    let content;
    return (
        <div className={["splash-row", splashLeft ? "splash-row__left" : null].join(" ")}>
            <div className="splash-row__image" style={{backgroundImage: `url(${image})`}}>
                <div className="splash-row__image-quote">
                    <h3 className="splash-row__image-quote--text">"{imageQuote}"</h3>
                    <h3 className="splash-row__image-quote--credit">- {imageQuoteCredit}</h3>
                </div>
            </div>
            <div className="splash-row__content">
                {children}
            </div>
        </div>
    )
}

export default SplashRow