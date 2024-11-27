
class Ability {
    constructor(nome, dano, custoMana) {
        this.nome = nome;
        this.dano = dano;
        this.custoMana = custoMana;
    }

    usar(jogador, inimigo) {
        if (jogador.pontosDeMana >= this.custoMana) {
            console.log(`${jogador.nome} usou ${this.nome} em ${inimigo.nome}`);
            jogador.pontosDeMana -= this.custoMana;
            inimigo.receberDano(this.dano);
        } else {
            console.log(`${jogador.nome} não tem mana suficiente para usar ${this.nome}`);
        }
    }
}


const nome = 'Italo'

// Criando 5 instâncias de Ability

const golpePoderoso = new Ability("Golpe Poderoso", 30, 10);
const fogoMagico = new Ability("Fogo Mágico", 50, 15);
const curaRapida = new Ability("Cura Rápida", -20, 10); // Cura o jogador
const escudoDeFerro = new Ability("Escudo de Ferro", 0, 5); // Não causa dano, mas aumenta defesa
const furiaDeBatalha = new Ability("Fúria de Batalha", 70, 25);

// Exibindo as instâncias criadas
console.log(golpePoderoso);
console.log(fogoMagico);
console.log(curaRapida);
console.log(escudoDeFerro);
console.log(furiaDeBatalha);


console.log(nome)
console.log(golpePoderoso.nome)