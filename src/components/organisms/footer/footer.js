import "./footer.scss"
import SecondaryHeading from "../../atoms/headings/secondary"
import Icon from "../../atoms/icon"
import Copyright from "../../atoms/copyright"

const Footer = ({emails, phones, facebook, instagram}) => {
    const emailList = emails.map(email => (
        <li key={email} className="footer__contact--item">
            <Icon className="footer__contact--icon" icon="icon-envelope-o"/> {email}
        </li>
    ))
    const phoneList = phones.map(phone => (
        <li key={phone} className="footer__contact--item">
            <Icon className="footer__contact--icon" icon="icon-phone"/> {phone}
        </li>
    ))
    return (
        <footer className="footer">
            <div className="footer__contact">
                <div className="footer__contact--channels">
                    <div className="footer__contact--channel">
                        <SecondaryHeading text="E-post" light/>
                        <ul className="footer__contact--list">
                            {emailList}
                        </ul>
                    </div>
                    <div className="footer__contact--channel">
                        <SecondaryHeading text="Telefon" light/>
                        <ul className="footer__contact--list">
                            {phoneList}
                        </ul>
                    </div>
                </div>
                <div className="footer__contact--map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2157.238947183517!2d12.177338316313232!3d57.26964928098614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fd9a2d0b46a7b%3A0xc58e8933f4bfb740!2zTk9SRFbDhFJBIDIwLCA0MzIgNjUgVsOkcsO2YmFja2E!5e0!3m2!1ssv!2sse!4v1628515359117!5m2!1ssv!2sse" 
                        style={{border: 0}}
                        allowfullscreen="false" 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="footer__social-media">
                <div className="footer__social-media--icons">
                    <a href={facebook}><Icon className="footer__social-media--icon" icon="icon-facebook" /></a>
                    <a href={instagram}><Icon className="footer__social-media--icon" icon="icon-instagram" /></a>
                </div>
                <div className="footer__social-media--copyright">
                    <Copyright />
                </div>
            </div>
        </footer>
    )
}

export default Footer