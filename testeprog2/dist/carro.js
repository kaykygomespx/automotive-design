"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carro = void 0;
const veiculo_1 = require("./veiculo");
class carro extends veiculo_1.veiculo {
    qtdportas;
    possuiArCondicionado;
    constructor(placa, modelo, anoFabricacao, valorDiaria, qtdPortas, possuiArCondicionado) {
        super(placa, modelo, anoFabricacao, valorDiaria);
        this.qtdportas = qtdPortas;
        this.possuiArCondicionado = possuiArCondicionado;
    }
    getqtdPortas() {
        return this.qtdportas;
    }
    getpossuiArCondicionado() {
        return this.possuiArCondicionado;
    }
    setqtdPortas(qtdPortas) {
        this.qtdportas = qtdPortas;
    }
    setpossuiArCondicionado(possuiArCondicionado) {
        this.possuiArCondicionado = possuiArCondicionado;
    }
}
exports.carro = carro;
//# sourceMappingURL=carro.js.map