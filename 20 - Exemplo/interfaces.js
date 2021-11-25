var TelefoneFixo = /** @class */ (function () {
    function TelefoneFixo(modeloTelefone, versaoTelefone, preco) {
        this.modeloTelefone = modeloTelefone;
        this.versaoTelefone = versaoTelefone;
        this.preco = preco;
    }
    TelefoneFixo.prototype.toque = function () {
        return "Trim Trim";
    };
    return TelefoneFixo;
}());
var TelefoneCelular = /** @class */ (function () {
    function TelefoneCelular(modeloTelefone, versaoTelefone, preco) {
        this.modeloTelefone = modeloTelefone;
        this.versaoTelefone = versaoTelefone;
        this.preco = preco;
    }
    TelefoneCelular.prototype.toque = function () {
        return "Ring Ring!!!";
    };
    return TelefoneCelular;
}());
var telefoneFixo = new TelefoneFixo("Marca" + " IntelBras", "modelo " + 78985, "preço " + 90.00);
var telefoneCelular = new TelefoneCelular("Lumia 520", 89623, 750.00);
var telefones = [];
telefones.push(telefoneFixo);
telefones.push(telefoneCelular);
for (var _i = 0, telefones_1 = telefones; _i < telefones_1.length; _i++) {
    var i = telefones_1[_i];
    console.log(i.modeloTelefone);
    console.log(i.versaoTelefone);
    console.log(i.preco);
    console.log(i.toque());
    console.log("==================");
}
