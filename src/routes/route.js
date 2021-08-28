import Header from '@templates/Header'
import Home from '@pages/Home'
import Countrie from '@pages/Countrie'
import getHash from '@utils/getHash'
import hashCompare from '@utils/hashCompare'
import Regiones from '@pages/Regiones'
import storag from "@utils/storag"


const routes = {
    "/": Home,
    "/:id": Countrie,
    "/:region": Regiones

}

const router = async () => {
    const header = document.querySelector("#header")
    const main = document.querySelector("#main")

    header.innerHTML = await Header()

    const hash = await getHash()
    const route = await hashCompare(hash)
    let render = routes[route] ? routes[route] : console.error("error")

    main.innerHTML = await render()
    storag()
    
}
export default router

