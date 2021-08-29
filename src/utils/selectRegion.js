const selectRegion = async (ev) => {

    const input = document.querySelector("#input-select");
    const region = input.value != 0 ? input.value : console.error("Error")

    let setLocation = window.location.pathname ? window.location.origin + window.location.pathname : window.location.origin

    let searchLocation = `${setLocation}#/${region}`
    
    window.location.assign(searchLocation)
}

export default selectRegion