function toogleMode(){
    const body = document.querySelector('body')
    body.classList.toggle("light")
    
    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (body.classList.contains("light")) {
        img.setAttribute("src", "./assets/marcelo2.png")
    } else {
        img.setAttribute("src","./assets/marcelo.png")
    }
}
