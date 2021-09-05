import "./portfolio.scss"
import Masonry from "../../molecules/masonry"
import PrimaryHeading from "../../atoms/headings/primary"
import Paragraph from "../../atoms/paragraph"
import ViewportFadeIn from "../../molecules/viewport-fadein"
import { useState, useEffect } from "react"
import { fetchPortfolio, serverUrl } from "../../../api/cms"

const Portfolio = ({sectionRef}) => {
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        update()
    }, [])
    
    const update = async () => {
        const images = await fetchPortfolio()
        console.log("images", images)
        setPortfolio(images)
    }

    const images = portfolio ? portfolio.map(image => {
        return {
            url: `${serverUrl()}/portfolio/${image}`,
            description: "Portfoliobild",
        }    
    }) : []

    return (
        <section ref={sectionRef} className="portfolio">
            <ViewportFadeIn direction="to-top" offset={0}>
                <div className="portfolio__introduction">
                    <PrimaryHeading text="Portfolio" />
                    <Paragraph text="För dig som gärna vill se våra tidigare projekt så visas här ett urval av fotografier. Vissa av fotografierna är alldeles nytagna och andra är daterade något år tillbaka." />
                </div>
            </ViewportFadeIn>
            <Masonry images={images} fadeIn={true} />
        </section>
    )    
}

export default Portfolio