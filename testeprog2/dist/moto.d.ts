import { veiculo } from "./veiculo";
export declare abstract class moto extends veiculo {
    private cilindradas;
    private possuiPartidaEletrica;
    constructor(placa: string, modelo: string, anoFabricacao: number, valorDiaria: number, cilindradas: number, possuiPartidaEletrica: boolean);
    getcilindradas(): number;
    getpossuiPartidaEletrica(): boolean;
    setcilindradas(cilindradas: number): void;
    setpossuiPartidaEletrica(possuiPartidaEletrica: boolean): void;
}
//# sourceMappingURL=moto.d.ts.map