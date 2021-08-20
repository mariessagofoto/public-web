import "./slideshow.scss"
import { useEffect, useState } from "react"
import PrimaryButton from "../../atoms/buttons/primary"
import SecondaryButton from "../../atoms/buttons/secondary"

const Slideshow = ({
    slides, 
    activeSlide, 
    onClickNextSlide, 
    onClickPreviousSlide,
    className
}) => {
    const [slide, setSlide] = useState()
    const [nextSlide, setNextSlide] = useState()
    const [shouldNavigate, setShouldNavigate] = useState(false)
    
    useEffect(() => {
        setNextSlide(slides[activeSlide])
    }, [activeSlide])

    useEffect(() => {
        setShouldNavigate(true)
        setTimeout(() => {
            setShouldNavigate(false)
            setSlide(nextSlide)
        }, 500)
    }, [nextSlide])

    const progress = slides.map((_, index) => (
            <div 
                className={["slideshow__progress--indicator", index <= activeSlide ? "slideshow__progress--indicator-filled" : null].join(" ")}
            ></div>
        )
    )

    return (
        <section className={["slideshow", className].join(" ")}>
            <div className={["slideshow__slide", shouldNavigate ? "slideshow__slide--navigate" : null].join(" ")}>
                {slide}
            </div>
            <div className="slideshow__navigation row">
                { activeSlide > 0 ? <SecondaryButton className="slideshow__navigation--button" onClick={onClickPreviousSlide} text="Föregående" />  : null }
                { activeSlide < slides.length - 1 ? <PrimaryButton className="slideshow__navigation--button" onClick={onClickNextSlide} text="Nästa" />  : null }
            </div>
            <div className="slideshow__progress">{progress}</div>
        </section>
    )
}

export default Slideshow