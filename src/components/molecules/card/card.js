import SecondaryHeading from "../../atoms/headings/secondary"
import "./card.scss"

const Card = ({className, title, image, topText, bottomText, tagText}) => {
    return (
        <div className={["card", className].join(" ")}>
            <img className="card__image" src={image} />
            <div className="card__content">
                <p className="card__top-text">{topText}</p>
                <SecondaryHeading large light className="card__title" text={title} />
            </div>
            <p className="card__tag">{tagText}</p>
        </div>
    )
}

export default Card