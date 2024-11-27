class PlayerService {
    constructor(playerRepository) {
        this.playerRepository = playerRepository;
    }

    async getAllPlayers() {
        return await this.playerRepository.getAllPlayers();
    }


    async createPlayer(player) {
        return await this.playerRepository.createPlayer(player);
    }


    ganharExperiencia(player, pontos) {
        player.adicionarExperiencia(pontos);
        console.log(`${player.getNome()} ganhou ${pontos} pontos de experiência.`);
        this.verificarNivel(player);  // Verifica se o jogador subiu de nível
    }

    verificarNivel(player) {
        const nivelRequerido = player.getNivel() * 100; // Exemplo de cálculo simples para o nível
        if (player.experiencia >= nivelRequerido) {
            player.nivel++;
            player.experiencia = 0; // Resetando experiência para o próximo nível
            console.log(`${player.getNome()} subiu para o nível ${player.getNivel()}!`);
        }
    }

    usarHabilidade(player, habilidade, custoMana) {
        if (player.getPontosDeMana() >= custoMana) {
            console.log(`${player.getNome()} usou a habilidade ${habilidade}.`);
            player.pontosDeMana -= custoMana;  // Reduz a mana do jogador
        } else {
            console.log(`${player.getNome()} não tem mana suficiente para usar a habilidade ${habilidade}.`);
        }
    }

    curar(player, pontos) {
        player.pontosDeVida += pontos;
        console.log(`${player.getNome()} foi curado em ${pontos} pontos de vida.`);
    }

    causarDano(player, pontos) {
        player.pontosDeVida -= pontos;
        console.log(`${player.getNome()} sofreu ${pontos} de dano.`);
    }
}

module.exports = PlayerService;