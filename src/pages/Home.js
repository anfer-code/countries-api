import getData from "../utils/getData"
import inputsHome from "@templates/InputsHome"
import toogleStyles from "@utils/toogleStyles"

const Home = async () => {

    const contentInput = document.querySelector("#inputs")
    contentInput.innerHTML = await inputsHome()

    const boton = document.querySelector("#toogle")
    boton.addEventListener("click", toogleStyles)

    const countrie = await getData()
    const view =  /*html*/`
        <section class="content__countries">
            ${countrie.map(i => `
                <a href="#/${i.alpha3Code}">
                    <div class="toogle-element toogle-text countrie">
                        <div class="countrie__image">
                            <img src="${i.flag}" alt="${i.name}">
                        </div>
                        <div class="countrie__description">
                            <h2 class="countrie__name">${i.name}</h2>
                            <div class="countrie__info">
                                <p>Population: <span>${i.population}</span></p>
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

export default Home