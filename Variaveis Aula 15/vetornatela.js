let valores = [8, 1, 5 ,7, 9]
valores.sort()

// ! MODO DE APARECER TODOS OS INDICES E SEUS RESPECTIVOS NUMEROS + Sort (organiza os numeros do menor pro maior)

//* console.log(valores);

// ! MODO BURRO / ESTUPIDO

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
*/

// ! MODO INTELIGENTE ou QUASE ISSO + Sort (organiza os numeros do menor pro maior)

/*
for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posicao ${posicao} tem o valor ${valores[posicao]}`)
}
*/

// ! MODO MAIS SIMPLIFICADO

for (let posicao in valores) {
        console.log(`A posicao ${posicao} tem o valor ${valores[posicao]}`)
}
