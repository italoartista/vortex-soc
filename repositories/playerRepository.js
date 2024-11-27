const { Pool } = require('pg');

// Configuração da conexão com o banco de dados
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'vortex',
    password: '',
    port: 5432,
});

class PlayerRepository {
    constructor(Player) {
        this.Player = Player;
    }

    async getAllPlayers() {
        const client = await pool.connect();
        try {
            const res = await client.query('SELECT * FROM players');
            return res.rows.map(row => new this.Player(row.nome, row.nivel, row.pontosdevida, row.pontosdemana, row.experiencia));
        } finally {
            client.release();
        }
    }

    async createPlayer(player) {
        const client = await pool.connect();
        try {
            const query = `
                INSERT INTO players (nome, nivel, pontosdevida, pontosdemana, experiencia)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING *;
            `;
            const values = [player.nome, player.nivel, player.pontosDeVida, player.pontosDeMana, player.experiencia];
            const res = await client.query(query, values);
            return new this.Player(res.rows[0].nome, res.rows[0].nivel, res.rows[0].pontosDeVida, res.rows[0].pontosDeMana, res.rows[0].experiencia);
        } finally {
            client.release();
        }
    }


}

module.exports = PlayerRepository;