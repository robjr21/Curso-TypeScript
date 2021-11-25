"use strict";
// Executar o arquivo TS   =   SHIFT + CTRL + B
Object.defineProperty(exports, "__esModule", { value: true });
exports.OlaMundo = void 0;
// No terminal executar: node + nome do arquivo JS
var OlaMundo = /** @class */ (function () {
    function OlaMundo() {
    }
    OlaMundo.prototype.digaOlaTodos = function () {
        console.log("Fala Coders");
    };
    return OlaMundo;
}());
exports.OlaMundo = OlaMundo;
var olamundo = new OlaMundo();
olamundo.digaOlaTodos();
