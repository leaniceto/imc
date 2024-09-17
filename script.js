document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let altura = parseInt(document.getElementById("altura").value);
    let peso = parseInt(document.getElementById("peso").value);

    if (altura > 0 && altura <= 999 && peso > 0 && peso <= 999) {
        altura = altura / 100;  
        peso = peso;            

        let imc = peso / (altura * altura);
        imc = imc.toFixed(2);

        let classificacao = "";
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        document.getElementById("resultado").innerHTML = 
            `Seu IMC é ${imc} (${classificacao}).`;
    } else {
        document.getElementById("resultado").innerHTML = 
            "Por favor, insira valores válidos.";
    }
});
