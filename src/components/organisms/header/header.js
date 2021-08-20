import LightLogo from "../../atoms/logo/light"
import WebsiteNavigation from "../../molecules/nav/website"
import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import "./header.scss"

const Header = ({routes}) => {
    const history = useHistory()

    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        "header.png", 
        "two-boys.jpg",
        "boy-on-raft.jpg",
    ]
    
    const onClickLogo = () => {
        history.push("/")
    }

    useEffect(() => {
        const interval = setInterval(() => setNextHeaderImage(), 7000)
        return () => clearInterval(interval)
    }, [images])

    const setNextHeaderImage = () => {
        const nextHeaderImageIndex = (currentImage + 1) % images.length
        setCurrentImage(nextHeaderImageIndex)
    }
    
    return (
        <header 
            className="header" 
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${images[currentImage]})`
            }}
        >
            <LightLogo onClick={onClickLogo} className="header__splash-logo"/>
            <WebsiteNavigation routes={routes} className="header__navigation"/>
        </header>
    )
}

export default Header