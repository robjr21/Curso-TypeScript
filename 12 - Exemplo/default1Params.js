function meuNomeCompleto(nome, sobrenome) {
    if (sobrenome === void 0) { sobrenome = "Lemos"; }
    return nome + " " + sobrenome;
}
var resultado1 = meuNomeCompleto("Glaucia"); //funcionar - OK!!
console.log("Resultado 1.......: ", resultado1);
var resultado2 = meuNomeCompleto("Glaucia", undefined); // funcionar - OK!!!
console.log("Resultado 2.......: ", resultado2);
var resultado3 = meuNomeCompleto("Jurema", "Lemos", "Sra.");
console.log("Resultado 3.......: ", resultado3);
var resultado4 = meuNomeCompleto("Glaucia", "Souza"); // funfar!!! - OK
console.log("Resultado 4.......: ", resultado4);
