const hashCompare = (id) => {
    const regiones = ["asia", "europe", "africa", "americas", "oceania"]
    let hashValue 

    if(id.length <= 3){
        hashValue = id === "/" ? id : "/:id"
        return hashValue 
    } else {
        for(let i of regiones){
            if(id == i){
                hashValue = "/:region" 
                return hashValue
            }
        }
    }

}

export default hashCompare