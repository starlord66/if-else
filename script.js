let idade = 27
if (idade >= 18){
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}

let human = true
if (idade >= 18 && human === true){
    console.log("Você é humano!")
}else{
    console.log("Você não é humano!")
}

let mes = "junho"
if (mes == "janeiro" || mes == "dezembro"){
    console.log("Triste, sem presentes pra você.")
}else{
    console.log("Parabéns, tome esse bolo de bacia!")
}

let nome = "Dell"
if(nome.substring(0,1)== "R"){
    console.log("Seu nome começa com 'D'")
}else{
    console.log("Seu nome não começa com D")
}

let sobrenome = "Schulz"
if(sobrenome.length > 6 || nome.substring(0,1)=== "'S'"){
    console.log("Seu sobrenome tem menos de 6 letras ou seu nome começa com 'D'")
}else{
    console.log("Seu sobrenome não tem menos de 6 letras ou seu nome não começa com 'D'")
}