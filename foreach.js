function contar() { // respondavel por contar os números
    let numero = 0; 
    let txtNumeroFinal = document.getElementById("txtNumeroFinal"); // criar a variavel que vai coletar o elemento txtNumero final
    let divNumeros = document.getElementById("divNumeros")
    divNumeros.innerHTML= "";
    for (var i = numero; i <= txtNumeroFinal.value; i++){// i= i + 1
        divNumeros.innerHTML += i + "<br />"; // vai fazer com que a variavel receba ela mesma + o valor desejado
    }
}

document.getElementById("txtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) { // código 13 é quando a tecla enter é clicada
        contar();
    } else {
    if (
        isNaN(event.key) && // aqui significa que não numerica é clicada
         event.keyCode != 8 && // codigo 8 é quando a tecla backspace é clicada
         event.keyCode != 46 &&// codigo 46 é quando a tecla delete é clicada
         event.keyCode != 37 && // codigo 37 é quando a tecla é seta para esquerda é clicada
         event.keyCode != 38 && // codigo 38 é quando a tecla seta para cima é clicada
         event.keyCode != 39 && // codigo 39 é quando a tecla seta para baixo é clicada
         event.keyCode != 40 &&// codigo 40 é quando a tecla seta para direita é clicada
         event.keyCode != 35 && // codigo 35 é quando a tecla end é teclada
         event.keyCode != 36 // codigo 36 é quando a tecla home é tecla da
        ){ 
        console.log("Não é numérico. KeyCode:");// aparece no console o nome de um erro personalizado
        divNumeros.innerHTML = "Não é permitido tecla não numérica! Por favor, gigite um número!!!"
    }
    }
}
);
document.getElementById("txtNumeroFinal").addEventListener('input', function (event) {
    if (this.value.length > 3) {
        if (this.value > 999) {
            this.value = 999;
            alert("O número máximo permitido é 999!");
        } else {
        this.value = this.value.substring(0,3);}
    }
});