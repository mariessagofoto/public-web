import axios from "axios"

export const serverUrl = () => process.env.REACT_APP_ENV == "prod" ? "https://mariessagofoto.se" : "http://localho.st"

const api = axios.create({
    baseURL: serverUrl()
})

export const fetchIntroduction = async () => {
    return {
        top: {
            paragraphs: [
                "Du erbjuds en förstklassig upplevelse samt fotografer som gör allt för att dokumentera dina relationer, minnen, barn eller dig och förvandlar det till vackra konstverk att hänga på väggen, ställa i hyllan eller ge bort som en vacker gåva.",
                "Maries Sagofoto är speciealister på magiska sagobilder och vill på ett professionellt och lekfullt sätt fånga ögonblicket som gör att dina bilder blir till något alldeles extra i ditt hem."
            ]
        },
        bottom: {
            paragraphs: [
                "Varje fotosession är helt anpassad efter just dina tankar, idéer och önskemål. Du skall kunna titta på dina fotografier och minnas din fotografering med stor glädje.",
                "Du kan genom denna hemsida boka din fotografering redan nu. Efter att du bokat så får du återkoppling av oss så snart det går."
            ]
        }
    }
}

export const fetchPortfolio = async () => {
    try {
        const response = await api.get("/api/portfolio")
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const postBooking = async ({
    firstName, 
    lastName, 
    email, 
    message
}) => {
    await api.post("/api/contact", {
        firstName,
        lastName,
        email,
        message
    })
}
