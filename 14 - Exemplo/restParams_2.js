// rest params    ...[]
function somarNumeros(numero1, numero2) {
    var numeros = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numeros[_i - 2] = arguments[_i];
    }
    var resultado = numero1 + numero2;
    for (var i = 0; i < numeros.length; i++) { // i = [30, 40, 50, 60, 70, 80, 90] 
        resultado += numeros[i]; //[30 + 40 + 50 + 60 + 70 + 80 + 90]   i = 420        
    }
    return resultado;
}
var resposta = somarNumeros(10, 20, 30, 40, 50, 60, 70, 80, 90); // Primeiro: 10 + 20 = 30 || // Segundo: i = 420                                                                                                                      
console.log("A soma dos números são...........: ", resposta); // Total = 450
