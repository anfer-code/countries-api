const toogleStyles = (ev) => {
    const elements = Array.from(document.querySelectorAll(".toogle-element"))
    const text = Array.from(document.querySelectorAll(".toogle-text"))
    const background = document.querySelector(".toogle-background")
    
    if(background.classList.contains("dark-background")){

        elements.map( i => {
            i.classList.remove("dark-elements")
            i.classList.remove("dark-text")
        })
        text.map( i => {
            i.classList.remove("dark-text")
        })
        background.classList.remove("dark-background")

        if(localStorage.length){
            localStorage.clear()
        }

    }
    else {

        localStorage.setItem("background", "dark-background")
        localStorage.setItem("elements", "dark-elements")
        localStorage.setItem("text", "dark-text")

        elements.map( i => {
            i.classList.add("dark-elements")
            i.classList.add("dark-text")
        })
        text.map( i => {
            i.classList.add("dark-text")
        })
        background.classList.add("dark-background")

    }
    
}

export default toogleStyles