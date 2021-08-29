import getData from "@utils/getData"

const selectRegion = async (ev) => {

    const input = document.querySelector("#input-select");
    const region = input.value != 0 ? input.value : console.error("Error")

    const response = await getData(`region/${region}`)
    window.location = `/#/${region}`
}

export default selectRegion