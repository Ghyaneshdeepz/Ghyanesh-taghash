import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',        
  host: 'localhost',      
  database: 'taghost',     
  password: 'SQL72@sql',   
  port: 5432,              
});

export default pool;
