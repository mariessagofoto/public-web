import "./masonry.scss"
import ThirdPartyMasonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ViewportFadeIn from "../viewport-fadein"

const Masonry = ({images, fadeIn}) => {
    const items = images.map(image => (
        fadeIn ? 
        <ViewportFadeIn direction="to-top" offset={-100}>
            <img className="masonry__column" src={image.url} alt={image.description} />
        </ViewportFadeIn>
        :
        <img className="masonry__column" src={image.url} alt={image.description} />
    ))
    return (
        <div className="masonry-wrapper">
            <ResponsiveMasonry columnsCountBreakPoints={{800: 1, 801: 2}}>
                <ThirdPartyMasonry columnsCount={2} gutter="3rem">
                    {items}
                </ThirdPartyMasonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default Masonry