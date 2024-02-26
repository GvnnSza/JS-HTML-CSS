function tabuada() {

    let numero = window.document.getElementById('txtnumero')
    let tabuada = window.document.getElementById('selecttabuada')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um numero!')

    } else {

        let n = Number(numero.value);
        let c = 1;
        tabuada.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}