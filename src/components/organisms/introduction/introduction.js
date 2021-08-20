import "./introduction.scss"
import "../../../sass/grid.scss"
import PrimaryHeading from "../../atoms/headings/primary"
import Paragraph from "../../atoms/paragraph"
import SplashRow from "../../molecules/splash-row"
import SecondaryHeading from "../../atoms/headings/secondary/secondary"
import PrimaryButton from "../../atoms/buttons/primary"
import SecondaryButton from "../../atoms/buttons/secondary"
import ViewportFadeIn from "../../molecules/viewport-fadein"

const Introduction = ({bookingSectionRef, portfolioSectionRef}) => {
    const scrollToBooking = event => {
        event.preventDefault()
        if (bookingSectionRef.current) {
            bookingSectionRef.current.scrollIntoView({behavior: "smooth", block: "center"})
        }
    }
    
    const scrollToPortfolio = event => {
        event.preventDefault()
        if (portfolioSectionRef.current) {
            portfolioSectionRef.current.scrollIntoView({behavior: "smooth", block: "center"})
        }
    }

    return (
        <section className="introduction">
            <div className="introduction__top">
                <ViewportFadeIn direction="to-top" offset={0}>
                    <PrimaryHeading className="introduction__top--title" text="Med magi från västkusten" />
                    <Paragraph className="introduction__top--paragraph" text="Du erbjuds en förstklassig upplevelse samt fotografer som gör allt för att dokumentera dina relationer, minnen, barn eller dig och förvandlar det till vackra konstverk att hänga på väggen, ställa i hyllan eller ge bort som en vacker gåva. " />
                </ViewportFadeIn>
            </div>
            <SplashRow 
                imageQuote="Om man bortser från själva bilderna som blev helt magiska, så är ni fantastiskt duktiga både som fotografer men också med barn!"
                imageQuoteCredit="Rebecka"
                splashLeft 
                image={`${process.env.PUBLIC_URL}/assets/introduction-top-a.png`}
            >
                <ViewportFadeIn direction="to-right" offset={0}>
                    <SecondaryHeading text="Minnen för livet"/>
                    <Paragraph text="Varje fotosession är helt anpassad efter just dina tankar, idéer och önskemål. Du skall kunna titta på dina fotografier och minnas din fotografering med stor glädje."/>
                    <Paragraph text="Du kan genom denna hemsida boka din fotografering redan nu. Efter att du bokat så får du återkoppling av oss så snart det går." />
                    <PrimaryButton className="introduction__splash-row--button" text="BOKA" onClick={event => scrollToBooking(event)}/>
                </ViewportFadeIn>
            </SplashRow>
            <SplashRow 
                imageQuote="Erat koncept är jätte häftigt och passar perfekt när det kommer till barn." 
                imageQuoteCredit="Rebecka"
                image={`${process.env.PUBLIC_URL}/assets/two-boys.jpg`}
            >
                <ViewportFadeIn direction="to-left" offset={0}>
                    <SecondaryHeading text="Fotograferna"/>
                    <Paragraph text="Julia Nilsson, är en utbildad förskolelärare och mamma till två fantastiska små flickor. Susanne Lindahl Hjerpe har en gedigen erfarenhet inom förskolepedagogik och hunduppfödning. Susanne har slutfört fotoutbildningar som behandlar flera olika fotogenrer och redigeringar."/>
                    <Paragraph text="Tillsammans utgör dem ett fotografteam som med enkelhet kan jobba med barn, hundar och vuxna för att få fram det lilla extra från just din fotografering." />
                    <SecondaryButton text="se portfolion" onClick={e => scrollToPortfolio(e)} />
                </ViewportFadeIn>
            </SplashRow>
        </section>
    )
}

export default Introduction