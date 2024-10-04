function login(){
    var usuario = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    // if(senha === "1234" && login === "1234") {
    //     alert("Acesso Liberado!")
    // }
    // else if(senha === "1234" || login === "1234"){
    //     alert("Preencha todos os campos!")
    // }
    // else {
    //     alert("Acesso Negado!")
    // }


    // if(senha != "1234" && login != "1234"){
    //     alert("Usuário ou senha incorretod")
    // }
    // else{
    //     alert("Acesso liberado!")
    // }

    if(
        (usuario === "Julia" && senha === "12345678@") ||
        (usuario === "julia" && senha === "12345678@") ||
        (usuario === "Hadja" && senha === "12345678@")
    ){
        alert("Acesso liberado!")
    }
    else if(senha.length < 8 || senha.includes("@")){
        alert("A senha deve conter no mínimo 8 caracterese um caracter especial")
    }
    else{
        alert("Usuário ou senha incorretos")
    }
}