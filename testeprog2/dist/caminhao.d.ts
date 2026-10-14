import { veiculo } from "./veiculo";
export declare abstract class caminhao extends veiculo {
    private capacidadeCarga;
    private qtdEixos;
    constructor(placa: string, modelo: string, anoFabricacao: number, valorDiaria: number, capacidadeCarga: number, qtdEixos: number);
    getcapacidadeCarga(): number;
    getqtdEixos(): number;
    setcapacidadeCarga(capacidadeCarga: number): void;
    setqtdEixos(qtdEixos: number): void;
}
//# sourceMappingURL=caminhao.d.ts.map