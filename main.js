const btnLogin = document.querySelector("#btnLogin")
const btnRegister = document.querySelector("#btnRegister")

function hideFields(){
    var numeroField = document.querySelector("#numeroField")
    var correoField = document.querySelector("#correoField")
    console.log(numeroField.style)

    if (numeroField.style.display !== "none" && correoField.style.display !== "none"){
        numeroField.style.display = "none"
        correoField.style.display = "none"
    }
}

function showFields(){
    var numeroField = document.querySelector("#numeroField")
    var correoField = document.querySelector("#correoField")

    if (numeroField.style.display !== "block" && correoField.style.display !== "block"){
        numeroField.style.display = "block"
        correoField.style.display = "block"
    }
}

btnLogin.addEventListener('click' , hideFields)
btnRegister.addEventListener('click' , showFields)