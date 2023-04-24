let button = document.getElementById("submit");
button.addEventListener("click", retorno);
button.addEventListener("mouseover", mudarCor);

function mudarCor() {
    button.style.backgroundColor = "Yellow"; 
    button.style.color = "black";
}

function retorno() {
    window.alert("As informações foram enviadas");
}

function validarEmail() {
    var email = document.querySelector('#email');
    var error = document.querySelector('#error-email');

    if(!email.checkValidity()) {
        error.innerHTML = "Email inválido"
    }
}

function redefinirMsg() {
    var error = document.querySelector('#error-email');
    if (error.innerHTML == "Email inválido") {
        error.innerHTML = "";
    }
}