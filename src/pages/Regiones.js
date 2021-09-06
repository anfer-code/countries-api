import getData from "../utils/getData"
import inputsHome from "@templates/InputsHome"
import getHash from "@utils/getHash"
import selectRegion from "@utils/selectRegion"
import inputSearch from "@utils/inputSearch"
import toogleStyles from "@utils/toogleStyles"





const Regiones = async () => {

    const contentInput = document.querySelector("#inputs")
    contentInput.innerHTML = await inputsHome()

    const boton = document.querySelector("#toogle")
    boton.addEventListener("click", toogleStyles)

    const inputt = document.querySelector("#input-select").addEventListener("change", selectRegion)
    const inputt2 = document.querySelector("#input-text").addEventListener("change", inputSearch)

    const data = await getHash()

    const countrie = await getData(`region/${data}`)
    const view =  /*html*/`
        <section class="content__countries animar">
            ${countrie.map(i => `
                <a href="#/${i.alpha3Code}">
                    <div class="toogle-element toogle-text countrie">
                        <div class="countrie__image">
                            <img src="${i.flag}" alt="${i.name}">
                        </div>
                        <div class="countrie__description">
                            <h2 class="countrie__name">${i.name}</h2>
                            <div class="countrie__info">
                                <p>Population: <span>${i.population.toLocaleString()}</span></p>
                                <p>Region: <span>${i.region}</span></p>
                                <p>Capital: <span>${i.capital}</span></p>
                            </div>
                            
                        </div>
                    </div>
                </a>
            `).join("")}
        </section>
    `

    return view
}

export default Regiones