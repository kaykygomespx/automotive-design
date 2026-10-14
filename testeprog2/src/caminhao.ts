import { veiculo } from "./veiculo";

export abstract class caminhao extends veiculo{
    private capacidadeCarga : number;
    private qtdEixos:number;

constructor (
    placa:string,
    modelo: string,
    anoFabricacao: number,
    valorDiaria : number,
    capacidadeCarga : number,
    qtdEixos: number,
)
{
    super(placa,modelo,anoFabricacao,valorDiaria,)

    this.capacidadeCarga = capacidadeCarga;
    this.qtdEixos = qtdEixos;
}
public getcapacidadeCarga ():number{
    return this.capacidadeCarga;
}
public getqtdEixos():number{
    return this.qtdEixos;
}
public setcapacidadeCarga (capacidadeCarga: number):void {
    this.capacidadeCarga = capacidadeCarga;
}
public setqtdEixos(qtdEixos: number): void {
    this.qtdEixos = qtdEixos;
}

}
