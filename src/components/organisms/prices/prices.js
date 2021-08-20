import "./prices.scss"
import Card from "../../molecules/card"
import PrimaryHeading from "../../atoms/headings/primary"

const Prices = ({sectionRef}) => {
    return (
        <section className="prices" ref={sectionRef}>
            <PrimaryHeading className="prices__title" text="Priser" />
            <div className="prices__list">
                <Card 
                    className="prices__list-item"
                    image={`${process.env.PUBLIC_URL}/assets/book.png`}
                    topText="5 bilder"
                    title="3800 kr"
                    tagText="I vackert USB-minne"
                />
                <Card 
                    className="prices__list-item"
                    image={`${process.env.PUBLIC_URL}/assets/two-boys.jpg`}
                    topText="10 bilder"
                    title="4800 kr"
                    tagText="I vackert USB-minne"
                />
                <Card 
                    className="prices__list-item"
                    image={`${process.env.PUBLIC_URL}/assets/boy-on-raft.jpg`}
                    topText="15 bilder"
                    title="5500 kr"
                    tagText="I vackert USB-minne"
                />
            </div>
        </section>
    )
}

export default Prices