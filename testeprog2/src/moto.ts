import { veiculo } from "./veiculo";

export abstract class moto extends veiculo{
private cilindradas : number;
private possuiPartidaEletrica :boolean;

constructor (

placa: string,
modelo: string,
anoFabricacao: number,
valorDiaria : number,
cilindradas: number,
possuiPartidaEletrica: boolean,
)
{
    super(placa,modelo,anoFabricacao,valorDiaria,)

        this.cilindradas = cilindradas;
        this.possuiPartidaEletrica = possuiPartidaEletrica;
}
public getcilindradas (): number{
    return this.cilindradas;
}
public getpossuiPartidaEletrica(): boolean{
    return this.possuiPartidaEletrica;
}
public setcilindradas (cilindradas : number): void{
    this.cilindradas = cilindradas;
}
 public setpossuiPartidaEletrica(possuiPartidaEletrica : boolean): void{
    this.possuiPartidaEletrica = possuiPartidaEletrica;
 }

}