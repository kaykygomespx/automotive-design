import { carro } from "./carro";
import { moto } from "./moto";
import { caminhao } from "./caminhao";

class CarroTeste extends carro {
    public calcularaluguel(dias: number): number {
        return this.getvalorDiaria() * dias;
    }
}

class MotoTeste extends moto {
    public calcularaluguel(dias: number): number {
        return this.getvalorDiaria() * dias;
    }
}

class CaminhaoTeste extends caminhao {
    public calcularaluguel(dias: number): number {
        return this.getvalorDiaria() * dias;
    }
}

const meuCarro = new CarroTeste(
    "ABC-1234",
    "Onix",
    2023,
    150,
    4,
    true
);

const minhaMoto = new MotoTeste(
    "DEF-5678",
    "CG 160",
    2024,
    80,
    160,
    true
);

const meuCaminhao = new CaminhaoTeste(
    "GHI-9012",
    "Volvo FH",
    2022,
    500,
    20,
    3
);

meuCarro.exibirDados();
console.log("Aluguel do carro: R$", meuCarro.calcularaluguel(3));

minhaMoto.exibirDados();
console.log("Aluguel da moto: R$", minhaMoto.calcularaluguel(3));

meuCaminhao.exibirDados();
console.log("Aluguel do caminhão: R$", meuCaminhao.calcularaluguel(3));
