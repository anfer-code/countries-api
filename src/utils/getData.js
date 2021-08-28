const API = "https://restcountries.eu/rest/v2/all/"

const getData = async (id) => {
    const apiUrl = id ? `${API.replace("all/", id)}` : API

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        return data   
    } catch (error) {
        console.error("Fetch Error: ", error)
    }

}

export default getData