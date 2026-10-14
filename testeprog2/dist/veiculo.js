"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veiculo = void 0;
class veiculo {
    placa;
    modelo;
    anoFabricacao;
    valorDiaria;
    constructor(placa, modelo, anoFabricacao, valorDiaria) {
        this.placa = placa;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.valorDiaria = valorDiaria;
    }
    getplaca() {
        return this.placa;
    }
    getmodelo() {
        return this.modelo;
    }
    getanoFabricacao() {
        return this.anoFabricacao;
    }
    getvalorDiaria() {
        return this.valorDiaria;
    }
    setplaca(placa) {
        this.placa = placa;
    }
    setmodelo(modelo) {
        this.modelo = modelo;
    }
    setanoFabricacao(anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }
    setvalorDiaria(valordiaria) {
        this.valorDiaria = valordiaria;
    }
    exibirDados() {
        console.log("---------------------------");
        console.log("placa: " + this.placa);
        console.log("modelo: " + this.modelo);
        console.log("anoFabricacao: " + this.anoFabricacao);
        console.log("valorDiaria: " + this.valorDiaria);
        console.log("---------------------------");
    }
}
exports.veiculo = veiculo;
//# sourceMappingURL=veiculo.js.map