import { useRef } from 'react'
import Nav from '../../components/molecules/nav/social-media'
import Book from '../../components/organisms/book'
import Footer from '../../components/organisms/footer'
import Header from '../../components/organisms/header'
import Introduction from '../../components/organisms/introduction'
import Process from '../../components/organisms/process'
import Portfolio from '../../components/organisms/portfolio'
import Prices from '../../components/organisms/prices/prices'
import { postBooking } from '../../api/cms'

const Home = () => {
    const processSection = useRef()
    const bookingSection = useRef()
    const pricesSection = useRef()
    const portfolioSection = useRef()
    const routes = [
        {section: processSection, title: "processen"}, 
        {section: bookingSection, title: "boka"}, 
        {section: pricesSection, title: "priser"}, 
        {section: portfolioSection, title: "portfolio"}, 
    ]

    const onBook = async ({firstName, lastName, email, message}, callback) => {
        try {
            await postBooking({
                firstName,
                lastName,
                email,
                message
            })
        } catch (err) {
            callback(err)
            return
        }
        callback()
    }

    return (
        <div className="App">
            <Nav facebook="https://facebook.com"/> 
            <Header routes={routes}/>
            <Introduction 
                bookingSectionRef={bookingSection} 
                portfolioSectionRef={portfolioSection}
            />
            <Process sectionRef={processSection}/>
            <Book onBook={onBook} sectionRef={bookingSection}/>
            <Prices sectionRef={pricesSection} />
            <Portfolio sectionRef={portfolioSection}/>
            <Footer 
                emails={["kontakt@mariessagofoto.se"]}
                phones={["0735050182", "0708227642"]}
                addresses={["Nordvära 20, 432 65 Väröbacka"]}
            />
        </div>
    )
}

export default Home