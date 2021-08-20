import SecondaryHeading from "../../atoms/headings/secondary"
import "./process.scss"
import "../../../sass/grid.scss"
import { useState } from "react"
import Slideshow from "../slideshow"
import Paragraph from "../../atoms/paragraph"
import PrimaryHeading from "../../atoms/headings/primary"
import ViewportFadeIn from "../../molecules/viewport-fadein"

const Process = ({sectionRef}) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
        <section className="process" ref={sectionRef}>
            <ViewportFadeIn direction="to-top" offset={-100}>
                <PrimaryHeading className="process__title" text="Processen" />
                <Slideshow
                    slides={[<Before />, <During />, <After />]} 
                    activeSlide={currentSlide} 
                    onClickNextSlide={() => setCurrentSlide(currentSlide+1)}
                    onClickPreviousSlide={() => setCurrentSlide(currentSlide-1)}
                />
            </ViewportFadeIn>
        </section>
    )
}

const Before = () => {
    return (
        <div className="process__before">
            <div className="row">
                <SecondaryHeading className="process__before--title" text="1. Före" large/>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Designkonsultation" />
                    <Paragraph text="Efter att vi har fått din bokning så bestämmer vi tillsammans en tid för designkonsultation då vi träffas och går igenom vad ni har för tankar och idéer när det gäller fotograferingen." />
                </div>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Kläder och rekvisita" />
                    <Paragraph text="Vad det gäller kläder så skall ni tänka på att det fungerar allra bäst med kläder i ljusa färger utan tryck och gärna kläder i olika lager. Önskar ni låna kläder eller rekvistia så lånar vi ut detta utan extra kostnad." />
                </div>
            </div>
            <div className="row">
                <div className="column-1-of-2">
                    <SecondaryHeading text="Musik" />
                    <Paragraph text="Vi önskar gärna veta vad ni eller erat barn gillar för musik/låtar då vi ofta använder oss av detta under fotograferingen." />
                </div>
            </div>
        </div>
    )
}

const During = () => {
    return (
        <div className="process__during">
            <div className="row">
                <SecondaryHeading className="process__during--title" text="2. Under" large/>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Dagen för fotograferingen" />
                    <Paragraph text="Vi träffas på utsatt tid och plats taggade för dagens fotografering." />
                </div>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Vid barnfotografering" />
                    <Paragraph text="Vi samarbetar med vårdnadshavaren under fotograferingen och gör allt för att barnet på ett naturligt sätt ger oss den där blicken/det där léendet som gör att bilden blir extra magisk och vacker." />
                </div>
            </div>
            <div className="row">
                <div className="column-1-of-2">
                    <SecondaryHeading text="Kläder och rekvisita" />
                    <Paragraph text="Förutsatt att barnet tycker att det känns bra och tycker att det är roligt, så kan vi göra 2-3 klädbyten. Ev. rekvisita byts ut efter hand om så önskas." />
                </div>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Miljö" />
                    <Paragraph text="Vi träffas och fotograferar vid utsatt plats, men rör oss även i närområdet för att skapa variation i bilderna." />
                </div>
            </div>
        </div>
    )
}

const After = () => {
    return (
        <div className="process__after">
            <div className="row">
                <SecondaryHeading className="process__after--title" text="3. Efter" large/>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Bildvisning" />
                    <Paragraph text="Ca 2 veckor efter fotograferingen så träffas vi för bildvisning. Bilderna presenteras för er och ni kan i lugn och ro beställa de bilder/bildpaket ni önskar. Bildvisningen tar ca 30 minuter" />
                </div>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Betalning" />
                    <Paragraph text="Betalningen för era beställningar sker innan bilderna/produkterna levereras." />
                </div>
            </div>
            <div className="row">
                <div className="column-1-of-2">
                    <SecondaryHeading text="Leverans" />
                    <Paragraph text="De digitala bilderna levereras så snart betalningen är utförd. Önskar ni produktbeställning så skickas produkterna så snart vi kan." />
                </div>
                <div className="column-1-of-2">
                    <SecondaryHeading text="Tack" />
                    <Paragraph text="Vi vill tacka för erat förtroende att få hjälpa er att skapa minnen som kommer att kunna uppskattas i flera generationer. Har ni några frågor så är det bara att ringa, maila eller SMS:a." />
                </div>
            </div>
        </div>
    )
}

export default Process