import getData from "@utils/getData"


const inputSearch = async (ev) => {

    const input = null || document.querySelector("#input-text")
    const countrie = input.value.length >= 3 ? input.value: inputError()

    try {
        const response = await getData(`name/${countrie}`)
        const data = response[0]

        const code = data.alpha3Code

        window.location = `countries-api/#/${code}`
        
    } catch (error) {
        console.error("New error", error)
    }

}
export default inputSearch