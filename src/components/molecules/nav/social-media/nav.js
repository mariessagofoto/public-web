import Icon from "../../../atoms/icon"
import "./nav.scss"

const SocialMediaNavigation = ({instagram, facebook}) => {
    return (
        <nav className="social-media-nav">
            <a href={facebook} target="_blank"><Icon className="social-media-nav__icon" icon="icon-facebook"/></a>
            <a href={instagram} target="_blank"><Icon className="social-media-nav__icon" icon="icon-instagram"/></a>
        </nav>
    )
}

export default SocialMediaNavigation