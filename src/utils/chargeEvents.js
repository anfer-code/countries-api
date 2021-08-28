import inputSearch from "@utils/inputSearch"
import selectRegion from "./selectRegion"

const chargeEvents = () => {

    if(window.location.hash.length === 0) {
        let inp = document.getElementById("input-text")
        let inp2 = document.getElementById("input-select")
        inp.addEventListener("change", inputSearch)
        inp2.addEventListener("change", selectRegion)
    }
    }


export default chargeEvents