export declare abstract class veiculo {
    private placa;
    private modelo;
    private anoFabricacao;
    private valorDiaria;
    constructor(placa: string, modelo: string, anoFabricacao: number, valorDiaria: number);
    getplaca(): string;
    getmodelo(): string;
    getanoFabricacao(): number;
    getvalorDiaria(): number;
    setplaca(placa: string): void;
    setmodelo(modelo: string): void;
    setanoFabricacao(anoFabricacao: number): void;
    setvalorDiaria(valordiaria: number): void;
    abstract calcularaluguel(dias: number): number;
    exibirDados(): void;
}
//# sourceMappingURL=veiculo.d.ts.map