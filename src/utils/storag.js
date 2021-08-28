const storage = () => {
    const body = document.querySelector(".toogle-background")
    const elements = Array.from(document.querySelectorAll(".toogle-element"))
    const text = Array.from(document.querySelectorAll(".toogle-text"))

    const textStyle = localStorage.getItem("text")
    const elementStyle = localStorage.getItem("elements")
    const back = localStorage.getItem("background")


    if(localStorage.length){
        elements.map(i => i.classList.add(elementStyle))
        text.map(i => i.classList.add(textStyle))
        body.classList.add(back)
    }
}

export default storage