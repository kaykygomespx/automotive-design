import { veiculo } from "./veiculo";
export declare abstract class carro extends veiculo {
    private qtdportas;
    private possuiArCondicionado;
    constructor(placa: string, modelo: string, anoFabricacao: number, valorDiaria: number, qtdPortas: number, possuiArCondicionado: boolean);
    getqtdPortas(): number;
    getpossuiArCondicionado(): boolean;
    setqtdPortas(qtdPortas: number): void;
    setpossuiArCondicionado(possuiArCondicionado: boolean): void;
}
//# sourceMappingURL=carro.d.ts.map