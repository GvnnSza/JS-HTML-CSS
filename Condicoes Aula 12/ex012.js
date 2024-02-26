let agora = new Date();
let diaSem = agora.getDay();

// let dia = 1;

switch (dia) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terca")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabado")
        break
    case 7:
        console.log("[ERROR]! Dia Invalido, coloque o numero de 0 a 6 por favor")
        break
}