const Player = require('../models/player');
const PlayerRepository = require('../repositories/playerRepository');
const PlayerService = require('../services/playerService');

// Instanciando o repositório e o serviço
const playerRepository = new PlayerRepository(Player);
const playerService = new PlayerService(playerRepository);

// Função para listar todos os jogadores
async function listPlayers(req, res) {
    try {
        const players = await playerService.getAllPlayers();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar jogadores' });
    }
}


async function createPlayer(req, res) {
    try {
        const { nome, nivel, pontosDeVida, pontosDeMana, experiencia } = req.body;
        const player = new Player(nome, nivel, pontosDeVida, pontosDeMana, experiencia);
        const newPlayer = await playerService.createPlayer(player);
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar jogador' });
    }
}

module.exports = { listPlayers, createPlayer };