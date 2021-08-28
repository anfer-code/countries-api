import getData from "@utils/getData"
import InputBack from "@templates/InputBack"
import getHash from "@utils/getHash"
import toogleStyles from "@utils/toogleStyles"

const Countrie = async () => {
    const hash = getHash()
    const countrie = await getData(`alpha/${hash}`)
    const seccionInput = document.querySelector("#inputs")

    
    const boton = document.querySelector("#toogle")
    boton.addEventListener("click", toogleStyles)

    seccionInput.innerHTML = await InputBack()
    const view = /*html*/`
        <div class="countrie-spec__container">
            <div class="countrie-spec__image">
                <img src="${countrie.flag}">
            </div>

            <div class="countrie-spec__container--two">

                <div class="countrie-spec__details">
                    <div class="countrie-spec__details--one toogle-text">
                        <h2 class="toogle-text">${countrie.name}</h2>
                        <p class="toogle-text">Native Name: <span>${countrie.nativeName }</span> </p>
                        <p class="toogle-text">Population: <span>${countrie.population}</span> </p>
                        <p class="toogle-text">Region: <span>${countrie.region}</span> </p>
                        <p class="toogle-text">Sub Region: <span>${countrie.subregion}</span> </p>
                        <p class="toogle-text">Capital: <span>${countrie.capital}</span> </p>
                    </div>

                    <div class="countrie-spec__details--two">
                    <p class="toogle-text">Top Level Domain: ${countrie.topLevelDomain.map(i => `<span>${i}</span>`).join("")}</p>
                    <p class="toogle-text">Currencies: <span>${countrie.currencies[0].name}</span> </p>
                    <p class="toogle-text">Languages: ${countrie.languages.map(i => `<span>${i.name}</span>`).join("")}</p>
                    </div>
                </div>

                <div class="countrie-spec__borders">
                    <h2 class="toogle-text">Border Countries:</h2>
                    <div class="countrie-spec__item">
                        ${countrie.borders.map((b) => `<a href="#/${b}" class="toogle-element toogle-text countrie-spec__borde">${b}</a>`).join("")}
                    </div>
                </div>
            </div>
        </div>
    `
    return view 
}

export default Countrie