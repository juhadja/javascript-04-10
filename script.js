// alert("Hello!")

// var nome = "Julia"

//printa no console texto + variável
console.log(`Seu nome é${nome}`)
//mesma coisa, porém mais fácil de confundir
console.log("Seu nome é " + nome)

//função
function clicar(){
    //pegar elemento por id
    //parseFloat = transforma em número
    var nome = document.getElementById("texto").value
    var idade = 18

    if(nome === "Julia" && idade === 18) {
        alert("Sextou!")
    }
    // "" -> aspas sem nada dentro : vazio
    else if(nome === ""){
        alert("Quem é você?")
    }
    else {
        alert('Sai daqui!')
    }
}