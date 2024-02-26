let idade = 10;
console.log(`Voce tem ${idade} anos`);
    if (idade < 16) {
        console.log("Nao Vota");
    } else
        if(idade >= 16 && idade < 18 || idade > 65) {
            console.log("Voto Opcional");
        } else {
            console.log("Voto Obrigatorio")
        }