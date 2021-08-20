import "./book.scss"
import { useState } from "react"
import Textfield from "../../atoms/form/text"
import SecondaryHeading from "../../atoms/headings/secondary"
import Textarea from "../../atoms/form/textarea"
import PrimaryButton from "../../atoms/buttons/primary"

const Book = ({onBook, sectionRef}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const onBookClicked = () => {
        if (firstName === "" || lastName === "") {
            setErrorMessage("Vänligen skriv in ett giltigt namn")
            return
        }
        if (email === "") {
            setErrorMessage("Vänligen skriv in en giltig e-post adress")
            return 
        }
        if (message === "") {
            setErrorMessage("Vänligen skriv in ett giltigt meddelande")
            return
        }
        setErrorMessage("")
        onBook({
            firstName,
            lastName,
            email,
            message
        }, err => {
            if (err) {
                setErrorMessage("Något gick fel, vänligen kontrollera dina uppgifter")
            } else {
                setSuccessMessage("Tack för ditt mail!")
                setFirstName("")
                setLastName("")
                setEmail("")
                setMessage("")    
            }
        })
    }

    return (
        <section className="book" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/boy-on-raft.jpg)`}} ref={sectionRef}>
            <div className="book__form">
                <SecondaryHeading text="Boka en fotografering" className="book__form--title"/>
                { errorMessage !== "" ? <p className="book__error">{errorMessage}</p> : null }
                { successMessage !== "" ? <p className="book__success">{successMessage}</p> : null }
                <div className="book__names">
                    <Textfield 
                    className="book__names--input"
                    value={firstName}
                    onChange={setFirstName}
                    placeholder="Förnamn"
                    />
                    <Textfield 
                        className="book__names--input"
                        value={lastName}
                        onChange={setLastName}
                        placeholder="Efternamn"
                    />
                </div>
                <div className="book__email">
                    <Textfield 
                        className="book__email--input"
                        value={email}
                        onChange={setEmail}
                        placeholder="E-post"
                    />
                </div>
                <div className="book__message">
                    <Textarea
                        value={message}
                        onChange={setMessage}
                        placeholder="Välkommen med ditt meddelande"
                        className="book__message--input"
                    />
                </div>
                <div className="book__send">
                    <PrimaryButton text="Skicka" small onClick={onBookClicked} />
                </div>
            </div>
        </section>
    )
}

export default Book