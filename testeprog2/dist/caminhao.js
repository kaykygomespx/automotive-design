"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caminhao = void 0;
const veiculo_1 = require("./veiculo");
class caminhao extends veiculo_1.veiculo {
    capacidadeCarga;
    qtdEixos;
    constructor(placa, modelo, anoFabricacao, valorDiaria, capacidadeCarga, qtdEixos) {
        super(placa, modelo, anoFabricacao, valorDiaria);
        this.capacidadeCarga = capacidadeCarga;
        this.qtdEixos = qtdEixos;
    }
    getcapacidadeCarga() {
        return this.capacidadeCarga;
    }
    getqtdEixos() {
        return this.qtdEixos;
    }
    setcapacidadeCarga(capacidadeCarga) {
        this.capacidadeCarga = capacidadeCarga;
    }
    setqtdEixos(qtdEixos) {
        this.qtdEixos = qtdEixos;
    }
}
exports.caminhao = caminhao;
//# sourceMappingURL=caminhao.js.map