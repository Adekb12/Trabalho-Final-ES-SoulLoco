import pg from 'pg'

async function conectar() {
    const pool = new pg.Pool({
        connectionString: "postgres://caoyfrru:e9D7JQaN_zAHS4r3Po-N01OYR9ZeIi2I@isabelle.db.elephantsql.com/caoyfrru"
    })
    return pool.connect();
}

export default { conectar }