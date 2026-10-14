export abstract class veiculo {
    private placa: string;
    private modelo: string;
    private anoFabricacao: number;
    private valorDiaria:number;

    constructor(
        placa:string,
        modelo: string,
        anoFabricacao:number,
        valorDiaria: number,
)
    {
        this.placa = placa;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
        this.valorDiaria =valorDiaria;
    }
public getplaca (): string{
    return this.placa;
}
public getmodelo (): string {
    return this.modelo;
}
public getanoFabricacao(): number{
    return this.anoFabricacao;
}
public getvalorDiaria(): number{
    return this.valorDiaria
}

public setplaca(placa : string): void{
    this.placa = placa;
}
public setmodelo(modelo: string): void {
    this.modelo = modelo;
}
public setanoFabricacao(anoFabricacao: number): void{
    this.anoFabricacao = anoFabricacao
}
public setvalorDiaria(valordiaria: number): void{
    this.valorDiaria = valordiaria;
}

public abstract calcularaluguel(dias:number): number;

 public exibirDados(): void {

    console.log("---------------------------");
    console.log("placa: " + this.placa);
    console.log("modelo: " + this.modelo);
    console.log("anoFabricacao: " + this.anoFabricacao);
    console.log("valorDiaria: " + this.valorDiaria);
    console.log("---------------------------");
 }

}