const API = "https://restcountries.eu/rest/v2/all/?access_key=bd1274754f57fb2c514ed78cba480de4
"

const getData = async (id) => {
    const apiUrl = id ? `${API.replace("all", id)}` : API

    try {
        const response = await fetch(apiUrl)
        const data = await response.json()

        return data   
    } catch (error) {
        console.error("Fetch Error: ", error)
    }

}

export default getData
