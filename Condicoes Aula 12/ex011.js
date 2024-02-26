// ! let hora = 15 // TESTEI E TODOS DERAM CERTO


let agora = new Date();
let hora = agora.getHours()
let minutos = agora.getMinutes();
let diaAtual = agora.getDay();
let mesAtual = agora.getMonth() + 1; // ? Adicionamos +1 pois os meses são de 0 a 11 (0 - Janeiro / 1 - Feveiro...) 
console.log(`Agora sao exatamente ${hora} horas e ${minutos} minutos do dia ${diaAtual} do mes ${mesAtual}`);
    if(hora < 5) {
        console.log("Boa Madrugada :D")
    } else {
        if (hora < 12) {
            console.log("Bom dia :D")
        } else {
            if (hora < 18) {
                console.log("Boa Tarde :D")
            } else {
                console.log("Boa Noite :D")
            }
        }
    }