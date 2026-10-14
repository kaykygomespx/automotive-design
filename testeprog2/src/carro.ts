import { veiculo } from "./veiculo";

export abstract class carro extends veiculo{
private qtdportas:number;
private possuiArCondicionado: boolean;

constructor(

    placa: string,
    modelo: string,
    anoFabricacao : number,
    valorDiaria : number,
    qtdPortas: number,
    possuiArCondicionado: boolean,
){
    super(placa,modelo,anoFabricacao,valorDiaria);

    this.qtdportas = qtdPortas;
    this.possuiArCondicionado = possuiArCondicionado;
}

public getqtdPortas(): number {
    return this.qtdportas;
}
public getpossuiArCondicionado(): boolean {
    return this.possuiArCondicionado;
}
public setqtdPortas (qtdPortas: number): void{
    this.qtdportas = qtdPortas;
}
public setpossuiArCondicionado (possuiArCondicionado: boolean): void{
    this.possuiArCondicionado = possuiArCondicionado;
}




}