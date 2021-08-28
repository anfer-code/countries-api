import chargeEvents from "@utils/chargeEvents"
import router from './routes/route';
import "@styles/style.scss"

window.addEventListener("load", router)
window.addEventListener("hashchange", router);
window.addEventListener("load", chargeEvents)
window.addEventListener("hashchange", chargeEvents);




