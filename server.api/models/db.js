import pkg from 'pg';

import dotenv from 'dotenv';

const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
        host: process.env.PGHOST,
        port: process.env.PGPORT,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
  });


  export default pool ;