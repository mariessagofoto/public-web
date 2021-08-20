import "./nav.scss"
import {Link} from "react-router-dom"

const WebsiteNavigation = ({routes, className, small}) => {
    const scrollToSection = ref => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }
    const links = routes.map(route => {
        if (route.path) {
            return <Link to={route.path} className={["website-nav__link", small ? "website-nav__link--small" : null].join(" ")}>{route.title}</Link>
        } else if (route.section) {
            return <a href="#" onClick={event => {
                event.preventDefault()
                scrollToSection(route.section)
            }} className={["website-nav__link", small ? "website-nav__link--small" : null].join(" ")}>{route.title}</a>
        }
    })
    return <nav className={["website-nav", className].join(" ")}>{links}</nav>
}

export default WebsiteNavigation