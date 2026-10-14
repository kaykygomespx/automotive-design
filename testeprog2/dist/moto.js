"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moto = void 0;
const veiculo_1 = require("./veiculo");
class moto extends veiculo_1.veiculo {
    cilindradas;
    possuiPartidaEletrica;
    constructor(placa, modelo, anoFabricacao, valorDiaria, cilindradas, possuiPartidaEletrica) {
        super(placa, modelo, anoFabricacao, valorDiaria);
        this.cilindradas = cilindradas;
        this.possuiPartidaEletrica = possuiPartidaEletrica;
    }
    getcilindradas() {
        return this.cilindradas;
    }
    getpossuiPartidaEletrica() {
        return this.possuiPartidaEletrica;
    }
    setcilindradas(cilindradas) {
        this.cilindradas = cilindradas;
    }
    setpossuiPartidaEletrica(possuiPartidaEletrica) {
        this.possuiPartidaEletrica = possuiPartidaEletrica;
    }
}
exports.moto = moto;
//# sourceMappingURL=moto.js.map