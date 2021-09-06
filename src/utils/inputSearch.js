import getData from "@utils/getData"


const inputSearch = async (ev) => {

    const input = null || document.querySelector("#input-text")
    const countrie = input.value.length >= 3 ? input.value: inputError()

    try {
        const response = await getData(`name/${countrie}`)
        const data = response[0]

        const code = data.alpha3Code

        let setLocation = window.location.pathname ? window.location.origin + window.location.pathname : window.location.origin

        let searchLocation = `${setLocation}#/${code}`

        //Puedo implementar la url con assign o href
        window.location.assign(searchLocation)
        
    } catch (error) {
        console.error("New error", error)
    }

}
export default inputSearch