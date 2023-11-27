import pg from 'pg';

// Configuração do pool de conexões
const pool = new pg.Pool({
    connectionString: "postgres://caoyfrru:e9D7JQaN_zAHS4r3Po-N01OYR9ZeIi2I@isabelle.db.elephantsql.com/caoyfrru"
});

// Função para conectar usando o pool
async function conectar() {
    try {
        const client = await pool.connect();
        return client;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        throw error; // Propaga o erro para quem chamou esta função
    }
}

export default { conectar };